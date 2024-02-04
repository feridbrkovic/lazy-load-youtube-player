# Lazy Load YouTube Background Player

This project leverages the YouTube IFrame Player API to implement a responsive, muted video background that only loads when the user scrolls to its section on the webpage. This lazy loading technique optimizes web page performance by delaying the video load and playback until it's actually needed, enhancing user experience without compromising on page load times.

## Key Features

- **Performance Optimization:** Uses lazy loading to ensure that the video only starts loading and playing when its section comes into the user's viewport.
- **Responsive and Muted Background Video:** The video adjusts to the size of its container for optimal viewing on all devices, and plays without sound to not distract the website visitors.
- **Autoplay and Loop:** The video automatically plays on loop once it becomes visible, providing a seamless background experience.
- **Customizable Video Content:** Easily set the video to start and end at specific points, allowing you to highlight certain sections of your chosen video.

## Getting Started

### Setup

1. **HTML Structure:** Place the provided HTML snippet where you want the YouTube video background on your webpage.

    <div class="youtube-bg" id="player-container">
        <div id="player" data-id="YOUR_VIDEO_ID"></div>
    </div>

2. **Customization:** Replace YOUR_VIDEO_ID in the data-id attribute with the ID of the YouTube video you wish to use as a background. Also, replace YOUR_DOMAIN_URL with your domain url.

3. **Styling:** Add the provided CSS to your project's stylesheet to ensure the video covers the desired area properly.

4. **Script Activation:** Include the JavaScript file in your project. This script initializes the YouTube video player and manages the lazy loading logic.

### Implementation
YouTube IFrame Player API: The project uses the YouTube IFrame Player API to embed the video. Ensure the script.js file is correctly linked within your HTML or integrated into your JavaScript bundle.

Visibility Detection: The lazy loading functionality relies on the Intersection Observer API to detect when the video element comes into view, triggering the video load and autoplay.

## Customization
Modify the player's settings in script.js to suit your needs. You can adjust autoplay behavior, video start and end times, and other playback options provided by the YouTube IFrame Player API.

## Browser Support
Ensure your target browsers support the Intersection Observer API for the lazy loading feature to work correctly. For browsers that do not support this API, consider adding a polyfill or alternative loading strategy.

## Contributing
Your contributions are welcome! Feel free to fork this repository, make improvements, and submit pull requests. If you have suggestions or encounter issues, please open an issue to discuss them.
