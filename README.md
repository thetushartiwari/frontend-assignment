# Franchise Dashboard

This project is a pixel-perfect recreation of a franchise management dashboard using Next.js and Tailwind CSS. The dashboard provides a comprehensive view of franchise operations, including account progress, franchisee onboarding, financial wellbeing, and prospect leads.

## Project Structure

\`\`\`
franchise-dashboard/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout component
│   └── page.jsx           # Main dashboard page
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── account-progress.jsx
│   │   ├── chat-assistant.jsx
│   │   ├── financial-wellbeing.jsx
│   │   ├── franchisees-onboard.jsx
│   │   ├── key-insights.jsx
│   │   └── prospect-leads.jsx
│   ├── header.jsx         # App header component
│   └── sidebar.jsx        # Navigation sidebar component
├── public/                # Static assets
└── tailwind.config.js     # Tailwind configuration
\`\`\`

## Technical Overview

### Page Components

#### `app/page.jsx`

**What**: The main dashboard page that serves as the container for all dashboard components.

**Why**: This component uses a grid layout to organize the dashboard widgets in a responsive manner. It's structured with two main rows:
- First row: Account Progress, Franchisees Onboard, and Key Insights
- Second row: Financial Wellbeing and Prospect Leads
- Chat Assistant at the bottom

The layout is responsive and will adjust based on screen size, ensuring a good user experience on all devices.

#### `app/layout.jsx`

**What**: The root layout component that wraps all pages.

**Why**: This component:
- Sets up the basic HTML structure
- Applies the Inter font
- Defines metadata for SEO
- Serves as the entry point for global styles

### Core Components

#### `components/sidebar.jsx`

**What**: The navigation sidebar on the left side of the dashboard.

**Why**: 
- Uses a dark blue background (#0e3b52) to create visual separation
- Provides navigation links to different sections of the application
- Highlights the active page (Home)
- Includes a notification badge for Pending Questions
- Uses hover effects to improve user interaction

#### `components/header.jsx`

**What**: The top header bar of the application.

**Why**:
- Provides access to settings via the gear icon
- Displays the user's profile picture
- Creates a clean separation between the navigation and content areas

### Dashboard Components

#### `components/dashboard/account-progress.jsx`

**What**: Displays the user's account completion progress.

**Why**:
- Uses an SVG circular progress indicator to show 85% completion
- Lists completed steps with green checkmarks
- Shows remaining steps that need to be completed
- Provides a clear visual representation of progress

**Technical Details**:
- The circular progress is created using SVG with stroke-dasharray and stroke-dashoffset to animate the arc
- The checkmarks use the Lucide React icon library

#### `components/dashboard/franchisees-onboard.jsx`

**What**: Shows statistics about franchisee onboarding.

**Why**:
- Displays the total number of franchisees (14)
- Shows growth percentage (7.4%)
- Includes avatar stack of franchisees
- Breaks down franchisees by stage with color-coded indicators
- Provides a quick overview of the onboarding pipeline

**Technical Details**:
- Uses color-coded progress bars to visually represent different stages
- Implements a stacked avatar display with overflow indicator (+7)

#### `components/dashboard/key-insights.jsx`

**What**: Highlights key performance metrics and feedback.

**Why**:
- Shows sales growth percentage (10%)
- Displays "Top Performer" badge with award icon
- Includes feedback from franchisees
- Provides quick access to important insights

**Technical Details**:
- Uses the Award icon from Lucide React
- Implements a custom badge for the "Top Performer" label

#### `components/dashboard/financial-wellbeing.jsx`

**What**: Displays financial metrics for the franchise.

**Why**:
- Shows total number of franchisees from a financial perspective (20)
- Displays growth percentage (2.1%)
- Compares target ($500,000) vs. current ($450,000) financial status
- Provides a clear view of financial health

**Technical Details**:
- Uses a grid layout to display target and current values side by side
- Implements the TrendingUp icon to indicate positive growth

#### `components/dashboard/prospect-leads.jsx`

**What**: Lists potential franchisees in the pipeline.

**Why**:
- Displays prospect information with avatars
- Shows the current stage for each prospect
- Provides a quick overview of the sales pipeline
- Helps track potential new franchisees

**Technical Details**:
- Uses JavaScript array mapping to render the list of prospects
- Implements a consistent layout for each prospect item

#### `components/dashboard/chat-assistant.jsx`

**What**: An AI chat interface for answering questions.

**Why**:
- Provides a way for users to ask questions
- Shows chat history with timestamps
- Includes a search input with send button
- Enhances user experience with AI assistance

**Technical Details**:
- Implements a chat-like interface with user avatars
- Uses the Send icon from Lucide React for the submit button
- Includes an online status indicator (green dot)

## Styling Approach

The project uses Tailwind CSS for styling with the following considerations:

1. **Color Scheme**: 
   - Primary blue (#2196f3) for progress indicators and highlights
   - Dark blue (#0e3b52) for the sidebar
   - Lighter blue variants for different stages and indicators

2. **Component Structure**:
   - Each component is wrapped in a card with consistent styling
   - Cards have rounded corners, border, and padding
   - Consistent typography with font sizes and weights

3. **Responsive Design**:
   - Grid layout adjusts based on screen size
   - Mobile-friendly design with stacked cards on smaller screens
   - Flexible components that adapt to their container

4. **Visual Hierarchy**:
   - Larger text for important numbers
   - Color coding for status and progress
   - Icons and visual elements to enhance understanding

## Performance Considerations

1. **Component Separation**:
   - Each dashboard widget is a separate component for better code organization
   - Enables easier maintenance and potential code splitting

2. **Minimal Dependencies**:
   - Only uses Lucide React for icons
   - Relies on Tailwind CSS for styling without additional CSS libraries

3. **Optimized Images**:
   - Uses placeholder images with appropriate dimensions
   - Real implementation would use Next.js Image component for optimization

## Accessibility Features

1. **Semantic HTML**:
   - Uses appropriate HTML elements (header, main, nav)
   - Proper heading hierarchy (h2, h3)

2. **Color Contrast**:
   - Sufficient contrast between text and background colors
   - Visual indicators beyond just color (icons, text)

3. **Screen Reader Considerations**:
   - Alt text for images
   - Semantic structure for better screen reader navigation

## Future Enhancements

Potential improvements for the dashboard:

1. **Interactivity**:
   - Add interactive charts and graphs
   - Implement filtering and sorting options

2. **Data Integration**:
   - Connect to a real backend API
   - Implement real-time updates

3. **User Customization**:
   - Allow users to customize dashboard layout
   - Add widget preferences and settings

4. **Additional Features**:
   - Notifications system
   - Export and reporting capabilities
   - Advanced analytics views
