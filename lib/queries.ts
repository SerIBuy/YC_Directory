import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`*[_type == 'startup' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
  _id,
  title,
  description,
  category,
  _createdAt,
  author -> {_id, name, bio, image},
  views,
  slug,
  image
}`);

export const STARTUPS_BY_ID_QUERY = defineQuery(`*[_type == 'startup' && _id == $id][0] {
  _id,
  description,
  category,
  _createdAt,
  author -> {_id, name, username, bio, image},
  views,
  slug,
  image,
  pitch
}`);