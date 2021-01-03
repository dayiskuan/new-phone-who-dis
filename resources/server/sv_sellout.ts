
import events from '../utils/events';
import { ESX } from './server';
import { getSource } from "./functions";
import { pool } from './db';
import { usePhoneNumber } from './functions';
import { Listings} from "../../phone/src/common/typings/listings";


/*
Fetches all the listings and returns an array of objects
 */
async function fetchAllListings(): Promise<Listings[]> {
  const query = "SELECT * FROM npwd_sellout_listings ORDER BY id DESC";

  const [ results ] = await pool.query(query);
  return <Listings[]>results;
}

/**
 * Adds the note to the database with the player identifier and the note.
 * @param identifier A players unique identifier
 * @param name The player in-game name
 * @param number The players phone number
 * @param listing The listing object
 */
async function addListing(identifier: string, name: string, number: string, listing: Listings): Promise<any> {
  const query = "INSERT INTO npwd_sellout_listings (identifier, name, number, title, url, description) VALUES (?, ?, ?, ?, ?, ?)"
  await pool.query(query, [
    identifier, 
    name,
    number,
    listing.title, 
    listing.url, 
    listing.description,
  ])
} 

/*
Event that sends the listings to client, which sends to NUI
 */
onNet(events.SELLOUT_FETCH_LISTING, async () => {
  try {
    const _source = (global as any).source;
    const listings = await fetchAllListings();
    emitNet(events.SELLOUT_SEND_LISTING, _source, listings)

  } catch(error) {
    console.log(error)
  }
})

/*
Event 
 */
onNet(events.SELLOUT_ADD_LISTING, async (listing: Listings) => {
  try {
    const xPlayer = ESX.GetPlayerFromId(getSource())
    const _identifier = xPlayer.getIdentifier()
    const name = xPlayer.getName()
  
    const phoneNumber = await usePhoneNumber(_identifier)
    addListing(_identifier, name, phoneNumber, listing)
  } catch (error) {
   console.log("Failed to add contact: ", error) 
  }
})

onNet('phone:createExternalProccess', async () => {

})