/**
 * GROQ Queries for mintclinic.com
 * Centralized queries for all routes
 */

// ============================================================================
// HOMEPAGE QUERIES
// ============================================================================

export const homepageQuery = `*[_type == "homepage"][0]{
  _id,
  _type,
  title,
  hero,
  sections[]{
    _key,
    _type,
    title,
    content,
    beforeAfter
  }
}`;

// ============================================================================
// SERVICE QUERIES
// ============================================================================

export const servicesListQuery = `*[_type == "service"] | order(title.bg asc){
  _id,
  "slug": slug.current,
  title,
  excerpt,
  category->{
    "slug": slug.current,
    title
  }
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0]{
  _id,
  "slug": slug.current,
  title,
  excerpt,
  content,
  featuredImage,
  category->{
    "slug": slug.current,
    title
  },
  seo
}`;

export const servicesByCategoryQuery = `*[_type == "service" && category->slug.current == $categorySlug] | order(title.bg asc){
  _id,
  "slug": slug.current,
  title,
  excerpt
}`;

export const serviceBySlugAndCategoryQuery = `*[_type == "service" && slug.current == $slug && category->slug.current == $category][0]{
  _id,
  "slug": slug.current,
  title,
  excerpt,
  content,
  featuredImage,
  category->{
    "slug": slug.current,
    title
  },
  seo
}`;

// ============================================================================
// CATEGORY QUERIES
// ============================================================================

export const categoriesListQuery = `*[_type == "category"] | order(order asc, title.bg asc){
  _id,
  "slug": slug.current,
  title,
  description,
  order
}`;

export const categoriesWithServicesListQuery = `{
  "categories": *[_type == "category"] 
    | order(order asc, title[$locale] asc)[0...10]{
      _id,
      "slug": slug.current,
      "title": coalesce(title[$locale], title.bg),
      "services": *[
        _type == "service" && category._ref == ^._id
      ] | order(title[$locale] asc){
        "slug": slug.current,
        "title": coalesce(title[$locale], title.bg)
      }
    }
}`;

export const categoryBySlugQuery = `*[_type == "category" && slug.current == $slug][0]{
  _id,
  "slug": slug.current,
  title,
  description
}`;

// ============================================================================
// TEAM QUERIES
// ============================================================================

export const teamMembersListQuery = `*[_type == "teamMember"] | order(name asc){
  _id,
  "slug": slug.current,
  name,
  role,
  bio,
  photo
}`;

export const teamMemberBySlugQuery = `*[_type == "teamMember" && slug.current == $slug][0]{
  _id,
  "slug": slug.current,
  name,
  role,
  bio,
  photo,
  education,
  experience,
  specializations,
  content,
  seo
}`;

// ============================================================================
// BLOG/POST QUERIES
// ============================================================================

export const postsListQuery = `*[_type == "post"] | order(publishedAt desc){
  _id,
  "slug": slug.current,
  title,
  excerpt,
  publishedAt,
  mainImage
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  "slug": slug.current,
  title,
  excerpt,
  content,
  mainImage,
  publishedAt,
  seo
}`;

// ============================================================================
// PAGE QUERIES
// ============================================================================

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  _id,
  "slug": slug.current,
  title,
  content,
  images,
  seo
}`;

// ============================================================================
// NAVIGATION QUERIES
// ============================================================================

export const navigationQuery = `{
  "categories": *[_type == "category"] | order(order asc, title.bg asc)[0...6]{
    "slug": slug.current,
    title
  },
  "services": *[_type == "service"] | order(title.bg asc)[0...10]{
    "slug": slug.current,
    title,
    "category": category->slug.current
  },
  "pages": *[_type == "page"]{
    "slug": slug.current,
    title
  }
}`;

// ============================================================================
// STATIC PARAMS QUERIES (for generateStaticParams)
// ============================================================================

export const allServiceSlugsQuery = `*[_type == "service" && defined(slug.current)]{
  "slug": slug.current
}`;

export const allServiceSlugsWithCategoryQuery = `*[_type == "service" && defined(slug.current) && defined(category->slug.current)]{
  "slug": slug.current,
  "category": category->slug.current
}`;

export const allCategorySlugsQuery = `*[_type == "category" && defined(slug.current)]{
  "slug": slug.current
}`;

export const allTeamMemberSlugsQuery = `*[_type == "teamMember" && defined(slug.current)]{
  "slug": slug.current
}`;

export const allPostSlugsQuery = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;

// ============================================================================
// UTILITY QUERIES
// ============================================================================

export const allDocumentTypesQuery = `*[]{
  _type,
  _id
} | order(_type asc)`;

export const documentCountQuery = `{
  "services": count(*[_type == "service"]),
  "categories": count(*[_type == "category"]),
  "teamMembers": count(*[_type == "teamMember"]),
  "posts": count(*[_type == "post"]),
  "pages": count(*[_type == "page"])
}`;
