# Airbnb Clone - Build Guide

A comprehensive guide to building an Airbnb-style vacation rental platform.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Core Features](#core-features)
4. [Page Structure](#page-structure)
5. [Component Breakdown](#component-breakdown)
6. [Database Schema](#database-schema)
7. [API Routes](#api-routes)
8. [Implementation Phases](#implementation-phases)

---

## Overview

This guide outlines how to build a vacation rental marketplace similar to Airbnb, featuring property listings, booking management, user authentication, and payment processing.

### Reference Screenshots

| Homepage | Date Picker | Booking Review |
|----------|-------------|----------------|
| ![Homepage](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/www.airbnb.com_-r1XdkFVZW70WKABESyhP6JneY3HFwf.png) | ![Date Picker](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20at%209.08.34%E2%80%AFPM-O0Ct5eiDMeTGQkjXWoxWnzYBqhe5V1.png) | ![Booking Review](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20at%209.08.25%E2%80%AFPM-LMBSeTqQvkNyna8KdruoQQzUt25QOK.png) |

---

## Tech Stack

### Recommended Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Frontend** | Next.js 16 (App Router) | React framework with SSR |
| **Styling** | Tailwind CSS + shadcn/ui | Component library & utilities |
| **Database** | Supabase (PostgreSQL) | Data storage + Auth |
| **File Storage** | Vercel Blob | Property images |
| **Payments** | Stripe | Booking payments |
| **Maps** | Mapbox or Google Maps | Location display |
| **State Management** | SWR | Data fetching & caching |

---

## Core Features

### 1. Search & Discovery
- [ ] Global search bar with location autocomplete
- [ ] Date range picker (check-in/check-out)
- [ ] Guest count selector (adults, children, infants, pets)
- [ ] Category filters (Homes, Experiences, Services)
- [ ] Price range filters
- [ ] Amenity filters

### 2. Property Listings
- [ ] Property cards with image carousel
- [ ] Ratings and reviews display
- [ ] "Guest favorite" badges
- [ ] Wishlist/favorites functionality
- [ ] Price per night display
- [ ] Location-based groupings ("Stay near Kings Island", "Stay in Covington")

### 3. Property Details Page
- [ ] Image gallery with lightbox
- [ ] Property description
- [ ] Amenities list
- [ ] Host information
- [ ] Location map
- [ ] Availability calendar
- [ ] Reviews section
- [ ] Booking widget

### 4. Booking Flow
- [ ] Date selection modal
- [ ] Guest selection
- [ ] Price breakdown (nightly rate, fees, taxes)
- [ ] Payment options (Pay now vs Pay later)
- [ ] Cancellation policy display
- [ ] Booking confirmation

### 5. User Features
- [ ] User registration/login
- [ ] User profile management
- [ ] Booking history
- [ ] Wishlists
- [ ] Messages/inbox

### 6. Host Features
- [ ] Property listing creation
- [ ] Calendar management
- [ ] Booking management
- [ ] Earnings dashboard

---

## Page Structure

```
app/
├── page.tsx                    # Homepage with listings
├── search/
│   └── page.tsx               # Search results
├── rooms/
│   └── [id]/
│       └── page.tsx           # Property details
├── book/
│   └── [id]/
│       └── page.tsx           # Booking/checkout
├── trips/
│   └── page.tsx               # User's bookings
├── wishlists/
│   └── page.tsx               # Saved properties
├── hosting/
│   ├── page.tsx               # Host dashboard
│   └── listings/
│       ├── page.tsx           # Manage listings
│       └── [id]/
│           └── page.tsx       # Edit listing
├── account/
│   └── page.tsx               # User settings
└── api/
    ├── properties/
    ├── bookings/
    ├── reviews/
    └── webhooks/
        └── stripe/
```

---

## Component Breakdown

### Navigation Components

#### Header / Search Bar
```
SearchBar
├── LocationInput (with autocomplete)
├── DateRangePicker
├── GuestSelector
└── SearchButton
```

#### Category Tabs
```
CategoryTabs
├── CategoryIcon (Homes)
├── CategoryIcon (Experiences)
└── CategoryIcon (Services)
```

#### Bottom Navigation (Mobile)
```
BottomNav
├── NavItem (Explore)
├── NavItem (Wishlists)
└── NavItem (Log in)
```

### Listing Components

#### Property Card
```tsx
PropertyCard
├── ImageCarousel
│   ├── PropertyImage[]
│   ├── NavigationDots
│   └── FavoriteButton (heart icon)
├── GuestFavoriteBadge (optional)
├── PropertyInfo
│   ├── Location
│   ├── Rating + ReviewCount
│   └── PricePerNight
```

#### Listing Section
```
ListingSection
├── SectionHeader
│   ├── Title ("Stay near Kings Island")
│   └── ViewAllLink (arrow)
└── PropertyGrid / PropertyCarousel
    └── PropertyCard[]
```

### Booking Components

#### Date Picker Modal
![Date Picker](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20at%209.08.34%E2%80%AFPM-O0Ct5eiDMeTGQkjXWoxWnzYBqhe5V1.png)

```
DatePickerModal
├── ModalHeader
│   ├── Title ("Change dates")
│   └── CloseButton
├── WeekdayHeaders (S M T W T F S)
├── LoadEarlierDatesButton
├── CalendarMonths
│   └── CalendarMonth[]
│       ├── MonthHeader ("May 2027")
│       └── DayGrid
│           └── DayCell[] (with selection states)
└── ModalFooter
    ├── ClearDatesButton
    └── SaveButton
```

#### Booking Review Modal
![Booking Review](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20at%209.08.25%E2%80%AFPM-LMBSeTqQvkNyna8KdruoQQzUt25QOK.png)

```
BookingReviewModal
├── ModalHeader
│   ├── Title ("Review and continue")
│   └── CloseButton
├── PropertySummary
│   ├── PropertyThumbnail
│   ├── PropertyTitle
│   ├── Rating + Reviews
│   └── GuestFavoriteBadge
├── BookingDetails
│   ├── DateRow (with Change button)
│   ├── GuestsRow (with Change button)
│   ├── TotalPriceRow (with Details button)
│   └── CancellationPolicy
└── PaymentOptions
    ├── PayNowOption (radio)
    └── PayLaterOption (radio with details)
```

### Footer Components

#### Inspiration Section
![Inspiration](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-21%20at%209.09.25%E2%80%AFPM-VTqHP4t8R64nbpCKMAIqlO3z68iMd4.png)

```
InspirationSection
├── SectionTitle ("Inspiration for future getaways")
├── CategoryTabs
│   ├── Tab (Popular)
│   ├── Tab (Arts & culture)
│   ├── Tab (Beach)
│   └── Tab (Mountains)
├── DestinationGrid
│   └── DestinationItem[]
│       ├── CityName
│       └── RentalType
└── ShowMoreButton
```

#### Site Footer
```
Footer
├── SupportSection
│   └── LinkList[]
├── HostingSection
│   └── LinkList[]
├── AirbnbSection
│   └── LinkList[]
├── LanguageCurrencySelector
├── SocialLinks
└── LegalLinks
```

---

## Database Schema

### Core Tables

```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name TEXT,
  avatar_url TEXT,
  phone TEXT,
  is_host BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Properties/Listings
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  host_id UUID REFERENCES profiles(id) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  property_type TEXT NOT NULL, -- 'apartment', 'house', 'cottage', etc.
  address TEXT,
  city TEXT NOT NULL,
  state TEXT,
  country TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  price_per_night DECIMAL(10, 2) NOT NULL,
  cleaning_fee DECIMAL(10, 2) DEFAULT 0,
  service_fee_percent DECIMAL(5, 2) DEFAULT 14,
  max_guests INTEGER NOT NULL,
  bedrooms INTEGER,
  beds INTEGER,
  bathrooms DECIMAL(3, 1),
  is_guest_favorite BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'active', -- 'active', 'inactive', 'pending'
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Property Images
CREATE TABLE property_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Amenities
CREATE TABLE amenities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  icon TEXT,
  category TEXT -- 'essentials', 'features', 'safety'
);

-- Property Amenities (junction table)
CREATE TABLE property_amenities (
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  amenity_id UUID REFERENCES amenities(id) ON DELETE CASCADE,
  PRIMARY KEY (property_id, amenity_id)
);

-- Availability/Blocked Dates
CREATE TABLE availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  is_available BOOLEAN DEFAULT true,
  custom_price DECIMAL(10, 2), -- Override default price
  UNIQUE (property_id, date)
);

-- Bookings
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id) NOT NULL,
  guest_id UUID REFERENCES profiles(id) NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  guests_count INTEGER NOT NULL,
  adults INTEGER NOT NULL,
  children INTEGER DEFAULT 0,
  infants INTEGER DEFAULT 0,
  pets INTEGER DEFAULT 0,
  subtotal DECIMAL(10, 2) NOT NULL,
  cleaning_fee DECIMAL(10, 2),
  service_fee DECIMAL(10, 2),
  taxes DECIMAL(10, 2),
  total DECIMAL(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending', -- 'pending', 'confirmed', 'cancelled', 'completed'
  payment_status TEXT DEFAULT 'pending', -- 'pending', 'paid', 'refunded'
  stripe_payment_intent_id TEXT,
  cancelled_at TIMESTAMPTZ,
  cancellation_reason TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Reviews
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) NOT NULL UNIQUE,
  property_id UUID REFERENCES properties(id) NOT NULL,
  guest_id UUID REFERENCES profiles(id) NOT NULL,
  rating DECIMAL(2, 1) NOT NULL CHECK (rating >= 1 AND rating <= 5),
  cleanliness_rating INTEGER CHECK (cleanliness_rating >= 1 AND cleanliness_rating <= 5),
  accuracy_rating INTEGER CHECK (accuracy_rating >= 1 AND accuracy_rating <= 5),
  checkin_rating INTEGER CHECK (checkin_rating >= 1 AND checkin_rating <= 5),
  communication_rating INTEGER CHECK (communication_rating >= 1 AND communication_rating <= 5),
  location_rating INTEGER CHECK (location_rating >= 1 AND location_rating <= 5),
  value_rating INTEGER CHECK (value_rating >= 1 AND value_rating <= 5),
  comment TEXT,
  host_response TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Wishlists
CREATE TABLE wishlists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Wishlist Items
CREATE TABLE wishlist_items (
  wishlist_id UUID REFERENCES wishlists(id) ON DELETE CASCADE,
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  added_at TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY (wishlist_id, property_id)
);

-- Messages
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  booking_id UUID REFERENCES bookings(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE conversation_participants (
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  PRIMARY KEY (conversation_id, user_id)
);

CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  sender_id UUID REFERENCES profiles(id) NOT NULL,
  content TEXT NOT NULL,
  read_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Indexes for Performance

```sql
-- Property search indexes
CREATE INDEX idx_properties_city ON properties(city);
CREATE INDEX idx_properties_country ON properties(country);
CREATE INDEX idx_properties_price ON properties(price_per_night);
CREATE INDEX idx_properties_host ON properties(host_id);
CREATE INDEX idx_properties_status ON properties(status);

-- Booking indexes
CREATE INDEX idx_bookings_property ON bookings(property_id);
CREATE INDEX idx_bookings_guest ON bookings(guest_id);
CREATE INDEX idx_bookings_dates ON bookings(check_in, check_out);
CREATE INDEX idx_bookings_status ON bookings(status);

-- Availability index
CREATE INDEX idx_availability_property_date ON availability(property_id, date);

-- Review indexes
CREATE INDEX idx_reviews_property ON reviews(property_id);
CREATE INDEX idx_reviews_rating ON reviews(rating);
```

---

## API Routes

### Properties

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/properties` | List properties with filters |
| GET | `/api/properties/[id]` | Get property details |
| POST | `/api/properties` | Create new listing (host) |
| PUT | `/api/properties/[id]` | Update listing (host) |
| DELETE | `/api/properties/[id]` | Delete listing (host) |
| GET | `/api/properties/[id]/availability` | Get availability calendar |
| PUT | `/api/properties/[id]/availability` | Update availability (host) |
| GET | `/api/properties/[id]/reviews` | Get property reviews |

### Bookings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/bookings` | List user's bookings |
| POST | `/api/bookings` | Create booking |
| GET | `/api/bookings/[id]` | Get booking details |
| PUT | `/api/bookings/[id]/cancel` | Cancel booking |
| POST | `/api/bookings/[id]/review` | Submit review |

### Search

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/search` | Search properties |
| GET | `/api/search/suggestions` | Location autocomplete |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/payments/create-intent` | Create Stripe payment intent |
| POST | `/api/webhooks/stripe` | Handle Stripe webhooks |

---

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Project setup with Next.js 16 + Tailwind + shadcn/ui
- [ ] Supabase integration + database schema
- [ ] User authentication (sign up, login, logout)
- [ ] Basic layout components (header, footer, navigation)
- [ ] Responsive design foundation

### Phase 2: Property Listings (Week 3-4)
- [ ] Property card component
- [ ] Homepage with listing sections
- [ ] Property detail page
- [ ] Image gallery/carousel
- [ ] Search bar component
- [ ] Location-based filtering

### Phase 3: Search & Filters (Week 5)
- [ ] Date range picker
- [ ] Guest selector
- [ ] Search results page
- [ ] Filter sidebar/modal
- [ ] Map integration (optional)

### Phase 4: Booking Flow (Week 6-7)
- [ ] Availability calendar
- [ ] Booking widget
- [ ] Price calculation
- [ ] Booking review modal
- [ ] Stripe payment integration
- [ ] Booking confirmation

### Phase 5: User Features (Week 8)
- [ ] User profile page
- [ ] Trips/bookings history
- [ ] Wishlists functionality
- [ ] Review submission

### Phase 6: Host Features (Week 9-10)
- [ ] Listing creation flow
- [ ] Property management dashboard
- [ ] Calendar/availability management
- [ ] Booking management
- [ ] Earnings overview

### Phase 7: Polish & Launch (Week 11-12)
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Email notifications
- [ ] Error handling
- [ ] Testing
- [ ] Deployment

---

## Key Implementation Notes

### Date Picker Implementation
- Use a library like `react-day-picker` or build custom
- Support date range selection with visual feedback
- Show multiple months simultaneously
- Handle blocked/unavailable dates
- Mobile-friendly touch interactions

### Payment Options
The booking flow should support:
1. **Pay now** - Full payment at booking
2. **Pay later** - Split payment (deposit now, remainder before check-in)

### Responsive Design
- Mobile-first approach
- Bottom navigation on mobile
- Side navigation on desktop
- Collapsible filters
- Touch-friendly interactions

### Performance Considerations
- Image optimization with `next/image`
- Lazy loading for off-screen content
- Infinite scroll or pagination for listings
- Server-side rendering for SEO
- Caching with SWR

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [React Day Picker](https://react-day-picker.js.org/)