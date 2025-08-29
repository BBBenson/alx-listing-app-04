// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from "next"

const mockProperties = [
  {
    id: "1",
    title: "Modern Apartment in Accra",
    location: "Accra, Ghana",
    price: 120,
    imageUrl: "/images/property1.jpg",
    rating: 4.8,
    description: "A stylish apartment close to the city center.",
  },
  {
    id: "2",
    title: "Beachfront Villa",
    location: "Cape Coast, Ghana",
    price: 250,
    imageUrl: "/images/property2.jpg",
    rating: 4.9,
    description: "Luxury villa with ocean views and private pool.",
  },
  {
    id: "3",
    title: "Cozy Cabin in the Mountains",
    location: "Aburi, Ghana",
    price: 90,
    imageUrl: "/images/property3.jpg",
    rating: 4.6,
    description: "Escape to a quiet cabin surrounded by nature.",
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (req.method === "GET") {
    const property = mockProperties.find((p) => p.id === id)
    if (property) {
      res.status(200).json(property)
    } else {
      res.status(404).json({ message: "Property not found" })
    }
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
