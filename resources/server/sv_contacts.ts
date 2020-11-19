import { ESX } from "./server";
import { pool } from "./db";
import events from "../utils/events";
import { useIdentifier, getSource } from './functions'

interface Contacts {
  id?: number;
  display: string;
  number: string;
  avatar: string;
}

interface ContactId {
  id: number;
}


async function fetchAllContacts(identifier: string): Promise<Contacts[]> {
  const query = "SELECT * FROM npwd_phone_contacts WHERE identifier = ?";
  const [results] = await pool.query(query, [identifier]);
  const contacts = <Contacts[]>results;
  return contacts;
}

async function addContact(
  identifier: string,
  number: string,
  display: string,
  avatar: string
): Promise<any> {
  const query =
    "INSERT INTO npwd_phone_contacts (identifier, number, display, avatar) VALUES (?, ?, ?, ?)";

  const [result] = await pool.query(query, [identifier, number, display, avatar]);
  console.log(result);
}

async function updateContact(contact: Contacts, identifier: string): Promise<any> {
  const query = "UPDATE npwd_phone_contacts SET number = ?, display = ?, avatar = ? WHERE id = ? AND identifier = ?" 
  await pool.query(query, [
    contact.number,
    contact.display,
    contact.avatar,
    contact.id,
    identifier
  ])
}

async function deleteContact(contact: ContactId, identifier: string): Promise<any> {
  const query = "DELETE FROM npwd_phone_contacts WHERE id = ? AND identifier = ?"
  await pool.query(query, [
    contact.id,
    identifier
  ])
}

onNet(events.CONTACTS_GET_CONTACTS, async () => {
  try {
    const _source = (global as any).source;
    const xPlayer = ESX.GetPlayerFromId(_source);
    const _identifier = xPlayer.getIdentifier();

    const contacts = await fetchAllContacts(_identifier);
    emitNet(events.CONTACTS_SEND_CONTACTS, _source, contacts);
  } catch (error) {
    console.log("Failed to fetch contacts: ", error);
  }
})

onNet(events.CONTACTS_ADD_CONTACT, async (number: string, display: string, avatar: string) => {
  try {
    const _source = (global as any).source;
    const _identifier = await useIdentifier()
    console.log(number, display);
    addContact(_identifier, number, display, avatar);
    emitNet(events.CONTACTS_ADD_CONTACT_SUCCESS, _source)

  } catch(error) {
    console.log("Failed to add contact: ", error);
  }
});

onNet(events.CONTACTS_UPDATE_CONTACT, async (contact: Contacts) => {
  try {
    const _source = (global as any)._source
    const _identifier = await useIdentifier()
    updateContact(contact, _identifier)
    emitNet(events.CONTACTS_UPDATE_CONTACT_SUCCESS, _source)
    
  } catch (error) {
    console.log(error)
  }
})

onNet(events.CONTACTS_DELETE_CONTACT, async (contact: ContactId) => {
  try {
    const _identifier = await useIdentifier()
    deleteContact(contact, _identifier)
    emitNet(events.CONTACTS_DELETE_CONTACT_SUCCESS, getSource())
  } catch (error) {
    console.log("DELETE CONTACT ERROR", error)
  }
})
