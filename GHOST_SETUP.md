# Ghost CMS Integration Setup

This project integrates with Ghost CMS to display blog posts on the Resources page.

## Prerequisites

1. A Ghost CMS instance (either self-hosted or Ghost(Pro))
2. Ghost Content API credentials

## Setup Instructions

### 1. Get Ghost API Credentials

1. Log in to your Ghost Admin panel
2. Navigate to **Settings** > **Integrations**
3. Click **Add custom integration**
4. Name your integration (e.g., "Ionova Website")
5. Copy the **Content API Key** and **API URL**

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Ghost credentials:
   ```
   VITE_GHOST_API_URL=https://your-ghost-site.ghost.io
   VITE_GHOST_CONTENT_API_KEY=your_content_api_key_here
   ```

   Replace:
   - `https://your-ghost-site.ghost.io` with your Ghost site URL
   - `your_content_api_key_here` with your Content API Key

### 3. Run the Development Server

```bash
npm run dev
```

Visit the Resources page to see your Ghost blog posts.

## Features

### Resources Page (`/resources`)
- Displays up to 9 recent blog posts
- Shows post title, excerpt, reading time, and publish date
- Displays feature images if available
- Links to individual blog post pages

### Blog Post Page (`/blog/:slug`)
- Full blog post content with HTML rendering
- Feature image display
- Author information and tags
- Reading time and publish date
- Responsive typography with the project's design system

## API Integration

The integration uses the official `@tryghost/content-api` package and includes:

- **Ghost API Service** (`src/lib/ghost.ts`): Core API functions
- **React Hooks** (`src/hooks/useGhostPosts.ts`): React Query hooks for data fetching
- **Components**: Resources page and BlogPost page

### Available Functions

#### `ghostAPI.getPosts(options)`
Fetches blog posts with optional limit and includes parameters.

#### `ghostAPI.getPostBySlug(slug)`
Fetches a single post by its slug.

#### `ghostAPI.getFeaturedPosts(limit)`
Fetches featured posts only.

## Styling

The blog post content uses custom CSS classes (`.ghost-content`) that apply the project's design system:
- Navy/Blue color palette
- Typography hierarchy
- Responsive images
- Code syntax styling
- Table and blockquote formatting

## Troubleshooting

### No posts appearing
1. Check that your `.env` file has the correct Ghost URL and API key
2. Verify the Ghost instance is accessible
3. Check browser console for API errors
4. Ensure your Ghost site has published posts

### Featured images not loading
1. Verify Ghost posts have feature images set
2. Check that the image URLs are accessible
3. Review browser console for CORS or network errors

### Styling issues
1. Ensure Tailwind CSS is properly configured
2. Check that `@tailwindcss/typography` is installed
3. Verify the ghost-content styles in `src/index.css`

## Development Notes

- Posts are cached for 5 minutes using React Query
- The integration is read-only (Content API only, not Admin API)
- HTML content is rendered using `dangerouslySetInnerHTML` (Ghost content is trusted)
- All Ghost API calls include error handling with fallback UI

## Security

- Never commit your `.env` file (it's in `.gitignore`)
- Use the Content API key (read-only), not the Admin API key
- The Content API key is safe to use in client-side code for public content
