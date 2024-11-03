import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const placeId = "ChIJNdOn9ImJbEcRuV1ohYHVVIw"; // google api ID
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
    );

    const reviews = response.data.result.reviews;
    res.status(200).json({ reviews });
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}