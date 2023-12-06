'use server'

// import { client } from "@/lib/db"
import { redirect } from 'next/navigation'

export async function createBook(formData : FormData) {
  const {title, rating, author, blurb} = Object.fromEntries(formData)
}