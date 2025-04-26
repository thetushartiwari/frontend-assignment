live link-  https://frontend-assignment-sable.vercel.app/

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

