import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  screen: "homescreen",
  topic_key: "unbox-your-lg-tv",
  step: 0,
  data: {
    "add-apps": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 825,
            top: 251,
            width: 41,
          },
          note: "",
          preset: 0,
          src: "add-apps-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 57,
                left: 537,
                top: 336,
                type: "rectangle",
                width: 57,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-02",
          text: "<p>Navigate to and select <strong>APPS</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "add-apps-03",
          text: "<p>Select a category such as Featured, Entertainment, Game, or Most Popular Apps. You can also search for an app by selecting the Search icon in the top right corner.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 112,
                left: 562,
                top: 203,
                type: "rectangle",
                width: 186,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-04",
          text: "<p>Then, select your desired app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 10,
                top: 266,
                type: "rectangle",
                width: 189,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-05",
          text: "<p>Select <strong>Install</strong> to install the app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 10,
                top: 266,
                type: "rectangle",
                width: 189,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-06",
          text: "<p>Select <strong>Launch</strong> when the app has been installed. The app will be added to the TV’s Home screen as well.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "add-apps-03",
          text: "<p>Repeat the above process to install additional apps.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-07",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "add-apps-07",
          text: "<p>Congrats!\r\nYou can now install apps.</p>",
          additional_help:
            "To learn more about adding apps to your LG TV, please check out:",
          link_title: "How to Install/Delete Apps on My LG Smart TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-install-delete-apps-on-my-lg-smart-tv-CT10000018-20153096004539",
        },
      ],
      title: "Add apps",
      topic_note:
        "<p>A variety of apps can be added to your TV, such as news, educational, and gaming apps. </p><p><strong>Note</strong>: The available categories may vary depending on the country or service status.</p>",
    },
    "ai-picture-pro": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 59,
                top: 81,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-02",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 234,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-03",
          text: "<p>Select<strong> AI Service</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 69,
                top: 156,
                type: "rectangle",
                width: 268,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-04",
          text: "<p>Select <strong>AI Picture Pro</strong> to turn on the feature.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-05",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "ai-picture-pro-05",
          text: "<p>Congrats!\r\nYou can now use AI Picture Pro.</p>",
          additional_help:
            "To learn more about using the AI Picture Pro feature on your LG TV, please check out:",
          link_title: "How To Enjoy AI Picture",
          link: "https://www.youtube.com/watch?v=IIPQT56HXWg&ab_channel=LGUSASupport",
        },
      ],
      title: "AI Picture Pro",
      topic_note:
        "Your TV’s AI uses Deep Learning techniques to enhance image clarity and provide realistic resolutions according to the content type you are viewing. \r\n\r\nNote: This feature is only available when using digital broadcasting, HDMI video input, and video content via USB.",
    },
    "always-ready-mode": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 60,
                top: 81,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-02",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 196,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-03",
          text: "<p>Select <strong>Always Ready</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 275,
                top: 262,
                type: "rectangle",
                width: 60,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-04",
          text: "<p>Select the <strong>switch</strong> next to Enable the function to turn on the feature.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-05",
          text: "<p>You can select from the following wallpaper options:\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-06",
          text: "<p><strong>Clock</strong>: Displays the time, date, weather, notifications, and other relevant information.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-07",
          text: "<p><strong>Art Piece</strong>: Select from two different art themes.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-05",
          text: "<p><strong>Movements</strong>: Select from five different video clips.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-09",
          text: "<p><strong>Moments</strong>: Transfer your own content from the ThinQ app on your mobile phone to use as your wallpaper.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-10",
          text: "<p><strong>Sound Palette</strong>: Select from curated music options or use your own music from a USB device or your mobile phone.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 68,
                top: 300,
                type: "rectangle",
                width: 269,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>Always Ready mode will use a wallpaper by default.</p>",
          preset: 0,
          src: "always-ready-mode-11",
          text: "<p>Select <strong>Use Always Ready without wallpaper </strong>if you do not wish to display a wallpaper.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 878,
            top: 332,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-12",
          text: "<p>You can use voice commands to control external devices, such as speakers, when Always Ready mode is active. To set this up, press the <strong>Settings</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-13",
          text: "<p>Navigate to and select <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 233,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-14",
          text: "<p>Select <strong>AI Service</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 71,
                top: 404,
                type: "rectangle",
                width: 264,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-15",
          text: "<p>Select <strong>Voice Recognition Settings</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-16",
          text: "<p>Next, turn off the TV. Always Ready mode will turn on and display your desired wallpaper. You can now use voice commands to control external devices if desired.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-16",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "always-ready-mode-16",
          text: "<p>Congrats! \r\nYou can now use Always Ready mode.</p>",
          additional_help:
            "To learn more about using the Always Ready more feature on your LG TV, please check out:",
          link_title: "",
          link: "",
        },
      ],
      title: "Always Ready mode",
      topic_note:
        "<p>Always Ready mode turns your TV into a media display when you are not using it. The screen will display information, artworks, videos, photos, or music when this mode is enabled. </p><p><strong>Note</strong>: Your TV’s energy consumption may increase when using this feature.</p>",
    },
    "connect-a-bluetooth-device": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-01",
          text: "<p>Make sure your TV is turned on, and then turn on the Bluetooth device.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 331,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 63,
                top: 84,
                type: "rectangle",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-04",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 14,
                top: 171,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-05",
          text: "<p>Select <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 435,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-06",
          text: "<p>Select <strong>External Devices</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 69,
                top: 154,
                type: "rectangle",
                width: 267,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-07",
          text: "<p>Select <strong>Connect Bluetooth Controller</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 45,
                left: 72,
                top: 231,
                type: "rectangle",
                width: 255,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-08",
          text: "<p>Select your desired Bluetooth device to connect to it.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-09",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-bluetooth-device-09",
          text: "<p>Congrats!\r\nYou can now connect Bluetooth devices.</p>",
          additional_help:
            "To learn more about connecting a Bluetooth device to your LG TV, please check out:",
          link_title: "How to connect a keyboard, mouse, or gamepad to your LG TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-connect-a-keyboard-mouse-or-gamepad-to-your-lg-tv-CT10000018-20152890341179",
        },
      ],
      title: "Connect a Bluetooth device",
      topic_note:
        "<p>You can connect and use Bluetooth devices with your TV, such as a keyboard, mouse, gamepad, and speaker.</p><p><strong>Note: </strong>Depending on the type of Bluetooth device you are using, the TV may automatically detect the device when it is placed in pairing mode.</p>",
    },
    "connect-a-sound-bar": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 54,
                left: 60,
                top: 81,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 136,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-02",
          text: "<p>Navigate to <strong>Sound</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 69,
                left: 162,
                top: 211,
                type: "rectangle",
                width: 265,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-03",
          text: "<p>Select <strong>Sound Out</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-04",
          text: "<p>From here, select your desired option:\r\n\r\n\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 70,
                top: 290,
                type: "rectangle",
                width: 267,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-05",
          text: "<p><strong>Use Wired Speaker</strong>: Play audio using a sound bar connected to the Optical Out or HDMI ports on your TV.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 70,
                top: 328,
                type: "rectangle",
                width: 266,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-06",
          text: "<p><strong>Use Wireless Speaker</strong>: Connect a Bluetooth device, WiSA speaker, or your mobile device to play audio.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 70,
                top: 367,
                type: "rectangle",
                width: 266,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-07",
          text: "<p><strong>Use External Speakers with TV Speaker</strong>: Play audio using a sound bar connected to the Optical Out or HDMI ports, while also hearing sound through your TV’s speaker.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-03",
          text: "<p>Follow the on-screen instructions if necessary to begin playing audio from your desired sound bar or speaker.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-03",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-a-sound-bar-03",
          text: "<p>Congrats!\r\nYou can now connect a sound bar or speaker.</p>",
          additional_help:
            "To learn more about connecting a sound bar to your LG TV, please check out:",
          link_title: "How to Connect a Sound Bar or Receiver",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-connect-a-sound-bar-or-receiver-CT10000018-20153207557627",
        },
      ],
      title: "Connect a sound bar",
      topic_note:
        "There are a few ways to connect a sound bar or speaker to your LG TV. These include connecting to the Optical Out or HDMI ports, or connecting wirelessly with Bluetooth.\r\n",
    },
    "connect-to-a-wired-network": {
      category: "Getting started",
      category_slug: "getting-started",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-01",
          text: "<p>Turn on your TV and router or modem.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 838,
            top: 552,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "connect-to-a-wired-network-02",
          text: "<p>Connect one end of a LAN cable to your router or modem, and then connect the other end to the LAN port on your TV. Your TV will automatically detect the network and connect to it.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 63,
                top: 84,
                type: "round",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-03",
          text: "<p>If the network is not detected or connected, navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-04",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 161,
                top: 424,
                type: "rectangle",
                width: 265,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-05",
          text: "<p>Select <strong>Network</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 68,
                left: 222,
                top: 196,
                type: "rectangle",
                width: 350,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-06",
          text: "<p>Select <strong>Wired Connection (Ethernet)</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 328,
                top: 345,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-07",
          text: "<p>Follow the-onscreen instructions to connect to the network.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wired-network-01",
          text: "<p>Congrats!\r\nYou have now connected your TV to a wired network.</p>",
          additional_help:
            "If you’re experiencing issues connecting to a wired network, please check out:",
          link_title: "LG TV - How to Setup a Wired Internet Connection",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-setup-a-wired-internet-connection--20153255459902",
        },
      ],
      title: "Connect to a wired network",
      topic_note:
        "Connecting to a network will allow you to use various online services and apps.",
    },
    "connect-to-a-wireless-network": {
      category: "Getting started",
      category_slug: "getting-started",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-01",
          text: "<p>Turn on your TV and router or modem.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 63,
                top: 84,
                type: "round",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-02",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-03",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 161,
                top: 424,
                type: "rectangle",
                width: 265,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-04",
          text: "<p>Select <strong>Network</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 74,
                left: 220,
                top: 249,
                type: "rectangle",
                width: 353,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-05",
          text: "<p>Select <strong>Wi-Fi Connection</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-06",
          text: "<p>Your TV will begin searching for available networks. Select your network from the list to connect to it.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-07",
          text: "<p>If needed, enter the network password to finish connecting to the network.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "connect-to-a-wireless-network-01",
          text: "<p>Congrats!\r\nYou have now connected your TV to a wireless network.</p>",
          additional_help:
            "If you’re experiencing issues connecting to your Wi-Fi network, please check out:",
          link_title:
            "LG TV - How to Troubleshoot and Connect Your TV Internet Wi-Fi Connection",
          link: "https://www.lg.com/us/support/help-library/troubleshooting-your-internet-connection-tv-CT10000018-1426626051711",
        },
      ],
      title: "Connect to a wireless network",
      topic_note:
        "Connecting to a network will allow you to use various online services and apps.",
    },
    "customize-the-home-screen": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "rectangle",
            height: 52,
            left: 6,
            top: 280,
            width: 164,
          },
          note: "",
          preset: 0,
          src: "customize-the-home-screen-01",
          text: "<p>Navigate to your desired card on the Home screen.</p>",
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 846,
            top: 287,
            width: 55,
          },
          note: "<p>Or, navigate to the far right of the card list from the WebOS Home screen, and then select Edit.</p>",
          preset: 0,
          src: "customize-the-home-screen-02",
          text: "<p>Press and hold the <strong>Wheel (OK)</strong> button on the TV’s remote control to open the Edit Card List mode.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 851,
            top: 290,
            width: 47,
          },
          note: "<p>You can remove a card from the list by selecting the up arrow above the card. Keep in mind that some cards cannot be removed.</p>",
          preset: 0,
          src: "customize-the-home-screen-03",
          text: "<p>Using the navigation wheel on the remote, move the card to your desired position, and then press the <strong>Wheel (OK)</strong> button to set it.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 14,
                top: 228,
                type: "rectangle",
                width: 167,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "customize-the-home-screen-04",
          text: "<p>You can also add new cards to the Home screen by selecting the card you want from the list at the top of the screen.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 822,
                top: 331,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 29,
                top: 107,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "customize-the-home-screen-05",
          text: "<p>Press the <strong>Back</strong> button on the remote control to exit the Edit Card Mode.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "customize-the-home-screen-06",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "customize-the-home-screen-06",
          text: "<p>Congrats! \r\nYou can now customize the Home screen.</p>",
          additional_help:
            "To learn more about customizing the Home screen on your LG TV, please check out:",
          link_title: "Exploring Home Launcher - WebOS 6 0",
          link: "https://www.youtube.com/watch?v=Bn_vVmrzeto&ab_channel=LGUSASupport",
        },
      ],
      title: "Customize the Home screen",
      topic_note:
        "The order of your Home screen’s cards can be changed, which allows you to quickly see and access your favorite content. You can also remove cards from the Home screen list.",
    },
    "family-care": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 59,
                top: 81,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "family-care-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "family-care-02",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 348,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "family-care-03",
          text: "<p>Select <strong>Family Settings</strong>. From here, you can use the following settings:</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>To edit your times, select Edit.</p>",
          preset: 0,
          src: "family-care-04",
          text: "<p><strong>Usage Limit Settings</strong>: Select Enable the function. Select your desired Start Time and End Time, and then select if you would like the settings to repeat. Select Set to turn on the feature and save your changes.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "family-care-05",
          text: "<p><strong>Eye Care Mode</strong>: Select Enable the function. The screen will automatically reduce the blue light level.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>This feature may not work when listening to audio through a connected device, such as a pair of headphones.</p>",
          preset: 0,
          src: "family-care-06",
          text: "<p><strong>Volume Limit Mode</strong>: Select Enable the function. You will not be able to raise the TV’s volume above a certain level. This is designed to protect your hearing.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "family-care-07",
          text: "<p><strong>Screen Time Report</strong>: From here, you can view your family’s TV Usage Time and App Usage.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "family-care-04",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "family-care-04",
          text: "<p>Congrats!\r\nYou can now use Family Care.</p>",
          additional_help:
            "To learn more about setting up the Family Care feature on your LG TV, please check out:",
          link_title: "Using Family Settings on Your LG TV - WebOS 2022",
          link: "https://www.youtube.com/watch?v=xbS3RBpvhNs&ab_channel=LGUSASupport",
        },
      ],
      title: "Family Care",
      topic_note:
        "The Family Care settings on your TV can be used to limit screen time, adjust the overall volume, and reduce blue light. You can also view screen time reports if you’d like to check how much time your family has spent using the TV.",
    },
    "game-optimizer": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 878,
            top: 332,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "game-optimizer-01",
          text: "<p>Press the <strong>Settings</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 61,
                left: 102,
                top: 344,
                type: "rectangle",
                width: 98,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "game-optimizer-02",
          text: "<p>Navigate to and select <strong>Game Optimizer</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 361,
                top: 95,
                type: "rectangle",
                width: 57,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "game-optimizer-03",
          text: "<p>Select <strong>On</strong>. From here, you can use the following features:</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "game-optimizer-04",
          text: "<p><strong>Game features</strong> </p><p><strong>Game Genre</strong>: Optimize the screen based on the current game genre. </p><p><strong>OLED Motion/OLED Motion Pro</strong>: Eliminate afterimages to provide a clearer picture.</p><p><strong>Reduce Blue Light</strong>: Adjust the screen’s blue light output to reduce eye strain. </p><p><strong>Dark Room Mode</strong>: Adjust the screen's brightness to reduce eye strain in dark environments. </p><p><strong>Prevent input delay (input lag)</strong>: Minimize the input lag to provide smoother images.</p><p><strong>Game Dashboard:</strong> Display the Game Dashboard during gameplay by pressing the Settings button on the TV’s remote. </p><p><strong>VRR</strong>: Reduce the video lag during gameplay. </p><p><strong>VRR &amp; G-Sync</strong>: Minimize screen tearing and stuttering using NVIDIA’s sync technology.</p><p><strong>AMD FreeStyle Premium</strong>: Minimize screen tearing and stuttering using AMD’s sync technology. You can choose from High (90 Hz - 120 Hz) or Wide (48 Hz - 120 Hz).</p><p><strong>ALLM</strong>: Automatically switch to low-latency mode during gameplay. </p><p><strong>Fine Tune Dark Areas</strong>: Calibrate the brightness of dark areas when VRR, VRR &amp; G-Sync, or AMD FreeSync Premium is enabled. </p><p><strong>Menu Color</strong>: Change the menu colors for Game Optimizer and Game Dashboard. </p><p><strong>User Guide</strong>: Open the User Guide. </p><p></p><p><strong>Picture features</strong> </p><p><strong>Black Stabilizer</strong>: Fine-tune dark areas of the screen. </p><p><strong>White Stabilizer</strong>: Fine-tune light areas of the screen. </p><p><strong>Game Contrast:</strong> Adjust the contrast of bright and dark areas of images. </p><p><strong>Game Black Level</strong>: Adjust the overall screen brightness. </p><p><strong>Adjust Game Sharpness</strong>: Adjust the sharpness of images. </p><p><strong>Game Color Depth</strong>: Adjust the color tones of images. </p><p><strong>Dynamic Tone Mapping</strong>: Provides contrast based on the brightness of images. </p><p><strong>Reset</strong>: Reset your desired picture settings. </p><p><strong>Wide Aspect Ratio</strong>: Display the screen in your desired resolutions. You can choose an aspect ratio of 21:9 or 32:9. </p><p><strong>Screen Position</strong>: Change the position of the screen when it is set to use a widescreen ratio. </p><p><strong>Advanced Picture Settings</strong>: Open the Advanced Picture Settings. </p><p></p><p><strong>Sound features</strong> </p><p><strong>AI Game Sound</strong>: Optimize the sound during gameplay. </p><p><strong>Game Equalizer</strong>: Increase or decrease the frequency of sounds. </p><p><strong>Dolby Atmos</strong>: Use Dolby Atmos sound. </p><p><strong>Sound Out</strong>: Select an audio device to output sound. </p><p><strong>Advanced Sound Settings</strong>: Open the Advanced Sound Settings.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "game-optimizer-04",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "game-optimizer-04",
          text: "<p>Congrats!\r\nYou can now use Game Optimizer.</p>",
          additional_help:
            "To learn more about playing games with the Game Optimizer feature on your LG TV, please check out:",
          link_title: "How To Use The Game Optimizer",
          link: "https://www.youtube.com/watch?v=Guugo340S9c&ab_channel=LGUSASupport",
        },
      ],
      title: "Game Optimizer",
      topic_note:
        "Game Optimizer allows you to use picture and sound features that are suited to playing games on your TV. \r\n\r\nNote: The available features may differ depending on the model. Game Optimizer can only be enabled when a game console is connected to your TV.\r\n",
    },
    "get-to-know-the-magic-remote": {
      category: "Using the Magic Remote",
      category_slug: "using-the-magic-remote",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 843,
            top: 556,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "get-to-know-the-magic-remote-01",
          text: "<p>To begin using the Magic Remote, shake it left and right or move its center wheel button while pointing it at the TV. The remote’s pointer will appear on the screen. The pointer will follow your movements while you are moving the remote control with your hands.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 851,
            top: 290,
            width: 47,
          },
          note: "<p>If the pointer disappears from the screen, shake the remote control left and right. The pointer will reappear.</p>",
          preset: 0,
          src: "get-to-know-the-magic-remote-02",
          text: "<p>To select something, move the pointer to your desired location, and then press the <strong>Wheel (OK)</strong> button.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 90,
            left: 829,
            top: 269,
            width: 90,
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-02",
          text: "<p>You can also use the directional <strong>wheel</strong> instead of the pointer. Simply press the wheel in your desired direction to navigate the screen.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 63,
                top: 84,
                type: "rectangle",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-04",
          text: "<p>To learn more about using the Magic Remote, navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-05",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 161,
                top: 155,
                type: "rectangle",
                width: 266,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-06",
          text: "<p>Select <strong>Accessibility</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 69,
                top: 303,
                type: "rectangle",
                width: 268,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Select <strong>Learn Remote Control</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-08",
          longstep: true,
          text: "<p>Then, press your desired button and follow the on-screen instructions to learn about the button’s functions. The following buttons and functions are available:\r\n</p>",
          accordions: [
            {
              icon: "+",
              title: "Game Feature",
              description: (
                <ul>
                  <li>
                    <h4>09</h4>
                    <p>Open Quick Help.</p>
                  </li>
                  <li>
                    <h4>GUIDE</h4>
                    <p>Open the Channel guide. Press and hold this button to display the available channels.</p>
                  </li>
                  <li>
                    <h4>0</h4>
                    <p>Press and hold this button to display the Quick Access screen.</p>
                  </li>
                  <li>
                    <h4>Options (the three dots)</h4>
                    <p>Display additional buttons. Press and hold this button to configure SAP.</p>
                  </li>
                  <li>
                    <h4>Volume</h4>
                    <p>Adjust the volume level.</p>
                  </li>
                  <li>
                    <h4>Mute</h4>
                    <p>Turn off the TV’s sound. Press and hold this button to open the Accessibility menu.</p>
                  </li>
                  <li>
                    <h4>Channel navigation arrows</h4>
                    <p>Change the channel.</p>
                  </li>
                  <li>
                    <h4>Microphone</h4>
                    <p>Use voice commands and voice recognition by holding down this button and speaking into the remote control.</p>
                  </li>
                  <li>
                    <h4>Home</h4>
                    <p>Display the Home menu. Press and hold this button to launch the last used app.</p>
                  </li>
                  <li>
                    <h4>Input</h4>
                    <p>Select an input source. Press and hold this button to open Home Hub.</p>
                  </li>
                  <li>
                    <h4>Back</h4>
                    <p>Return to the previous menu, app, or content. Press and hold this button to close the currently opened menu, app, or content.</p>
                  </li>
                  <li>
                    <h4>Settings</h4>
                    <p>Open the Quick Settings menu. Press and hold this button to open the All Settings menu.</p>
                  </li>
                  <li>
                    <h4>Record</h4>
                    <p>Start recording by launching Record.</p>
                  </li>
                </ul>
              ),
            },
          ]
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p><strong>GUIDE</strong>: Open the Channel guide. Press and hold this button to display the available channels.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>0: Press and hold this button to display the Quick Access screen.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Options (the three dots): Display additional buttons. Press and hold this button to configure SAP.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Volume: Adjust the volume level.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Mute: Turn off the TV’s sound.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Channel navigation arrows: Change the channel.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Microphone: Use voice commands and voice recognition by holding down this button and speaking into the remote control.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Home: Display the Home menu. Press and hold this button to launch the last used app.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Input: Select an input source. Press and hold this button to open Home Hub.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Back: Return to the previous menu, app, or content. Press and hold this button to close the currently opened menu, app, or content.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Settings: Open the Quick Settings menu. Press and hold this button to open the All Settings menu.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "<p>This function may not be available on all models.</p>",
          preset: 0,
          src: "get-to-know-the-magic-remote-07",
          text: "<p>Record: Start recording by launching Record.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-08",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "get-to-know-the-magic-remote-08",
          text: "<p>Congrats!\r\nYou can now use the Magic Remote.</p>",
          additional_help:
            "To learn more about using the Magic Remote, please check out:",
          link_title: "How to Troubleshoot Your LG Magic Remote",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-troubleshoot-your-lg-magic-remote-CT10000018-1427121727809",
        },
      ],
      title: "Get to know the Magic Remote",
      topic_note:
        "<p>Your LG TV’s Magic Remote can be used to navigate the screen, select items, open menus and apps, increase and decrease the volume, and change the channels. </p><p><strong>Note:</strong> To configure the Magic Remote’s pointer, navigate to and open <strong>Settings</strong>, then select <strong>User Guide</strong>, and then select <strong>Settings</strong>. Select <strong>System</strong>, and then select <strong>Pointer Options</strong>.</p>",
    },
    "home-hub": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 874,
            top: 244,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "home-hub-01",
          text: "<p>To open Home Hub, press and hold the <strong>Input</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p>You can use the following options in each section:\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p><strong>TV/Inputs</strong>: Watch featured programs, Live TV, and LG Channels. You can also access your connected external devices, stream live content, and open the Settings menu for sound output devices.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p><strong>Mobile/Bluetooth</strong>: Connect mobile devices to your TV, as well as use Apple AirPlay 2 to watch content from an iOS device. You can also control your connected Bluetooth devices.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p><strong>LG ThinQ/Matter Devices/Home Hub</strong>: Log in to your LG ThinQ account and use smart devices that are connected to your account. You can also view the connection guide for your Home IoT devices.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-06",
          text: "<p><strong>Smart Ways To Use Home Hub</strong>: Learn more about connecting devices to your TV and setting up notifications for your home appliances.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "home-hub-07",
          text: "<p><strong>Options (the three vertical dots)</strong>: Edit your current inputs, open Universal Control settings, hide or delete devices, edit the device list, enable device notifications, show devices that can be connected, and open the User Guide.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "home-hub-02",
          text: "<p>Congrats!\r\nYou can now use Home Hub.</p>",
          additional_help:
            "To learn more about using and managing the Home Hub feature on your LG TV, please check out:",
          link_title: "LG TV - How to Login to the Home Dashboard",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-login-to-the-home-dashboard--20153207266501",
        },
      ],
      title: "Home Hub",
      topic_note:
        "Home Hub allows you to see all of your TV’s inputs, featured channels, and connected devices in one place. You can also manage devices that are connected to the TV or to the LG ThinQ app on your mobile device. \r\n\r\nNote: Available settings may vary depending on the model or region.",
    },
    "initial-setup-for-your-lg-tv": {
      category: "Getting started",
      category_slug: "getting-started",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 851,
            top: 290,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-01",
          text: "<p>Turn on your TV, and then press the <strong>Wheel (OK)</strong> button on the remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-02",
          text: "<p>Select your language, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-03",
          text: "<p>Select your country, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-04",
          text: "<p>Select your time zone, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 395,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-05",
          text: "<p>Choose how you would like to begin setting up the TV. For this example, select <strong>TV</strong>, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>Select <strong>Connect</strong> if the TV does not automatically connect to the network.</p>",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-06",
          text: "<p>Select your Wi-Fi network, and then enter your network’s password when prompted.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-07",
          text: "<p>Review the information on the Terms &amp; Conditions screen, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 390,
                top: 460,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-08",
          text: "<p>You will need to agree to the Terms of Use and Privacy Policy. Select these options on the left side of the screen, or select <strong>Select All</strong> at the bottom. Select <strong>Agree</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-09",
          text: "<p>You can connect a device via HDMI if desired. Follow the on-screen instructions, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-10",
          text: "<p>Select how you would like to watch TV. For this example, select <strong>Cable/Satellite connected to HDMI, AV port on TV</strong>. Select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-11",
          text: "<p>Enter your zip code, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-12",
          text: "<p>Depending on your TV’s set up, select <strong>Stand</strong> or <strong>Wall-mounted</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-13",
          text: "<p>Depending on your preferences, enable AI Picture Pro and/or AI Sound Pro, and then select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 327,
                top: 466,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-14",
          text: "<p>You can enable SW Automatic Update if desired. This feature will automatically update your TV via your internet connection. Select <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 53,
                left: 248,
                top: 456,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-15",
          text: "<p>You can connect another remote to control your TV if desired. For this example, select <strong>Exit</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 167,
                left: 514,
                top: 253,
                type: "rectangle",
                width: 254,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-16",
          text: "<p>Next, you will be prompted to sign in to your MyLG account. For this example, select <strong>Sign in on TV</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 285,
                top: 188,
                type: "rectangle",
                width: 223,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>If you do not have an account, select <strong>Create LG Account</strong>, and then follow the on-screen instructions.</p>",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-17",
          text: "<p>Select <strong>LG Account Sign In</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 387,
                top: 459,
                type: "rectangle",
                width: 161,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-18",
          text: "<p>Enter your account credentials, and then select <strong>Sign In</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 52,
                left: 316,
                top: 459,
                type: "rectangle",
                width: 162,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-19",
          text: "<p>Set your desired TV nickname, and then select <strong>OK</strong>. This name will be displayed on your TV’s account list.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 663,
                top: 122,
                type: "rectangle",
                width: 92,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-20",
          text: "<p>You can register your TV if desired. For this example, select <strong>Skip</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 52,
                left: 315,
                top: 457,
                type: "rectangle",
                width: 163,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>You may be prompted to sign in to certain accounts, depending on the selected apps.</p>",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-21",
          text: "<p>You will be prompted to install recommended apps. Select your desired apps, and then select <strong>App Installation</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 302,
                top: 450,
                type: "rectangle",
                width: 191,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>You can also open the apps from this screen if desired.</p>",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-22",
          text: "<p>Allow the apps to install, and then select <strong>Close</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-23",
          text: "<p>The initial setup will be completed and you will be brought to the TV’s Home screen.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-23",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "initial-setup-for-your-lg-tv-23",
          text: "<p>Congrats! \r\nYou are now finished with the initial setup process.</p>",
          additional_help:
            "If you’re having trouble setting up your LG TV, please check out:",
          link_title: "",
          link: "",
        },
      ],
      title: "Initial setup for your LG TV",
      topic_note:
        "Congratulations on your new LG TV! Before you can use all of its features and functions, you will need to perform its initial setup. This process will let you connect your TV to a network, manage certain settings, link your MyLG account, and more.\r\n",
    },
    "pair-or-unpair-the-magic-remote": {
      category: "Using the Magic Remote",
      category_slug: "using-the-magic-remote",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 851,
            top: 290,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "pair-or-unpair-the-magic-remote-01",
          text: "<p>Turn on your TV. After about 20 seconds, point the Magic Remote at the TV and press the <strong>Wheel (OK)</strong> button.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>If the Magic Remote did not automatically register and pair, turn off the TV, and then turn it back on. Then, try to register the remote again.</p>",
          preset: 0,
          src: "pair-or-unpair-the-magic-remote-02",
          text: "<p>The Magic Remote will be automatically registered to the TV, and pairing will be complete. A pairing message will also appear on the TV.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 822,
                top: 248,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 822,
                top: 332,
                type: "round",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "pair-or-unpair-the-magic-remote-01",
          text: "<p>To unpair the Magic Remote from your TV, press the <strong>Back</strong> and <strong>Home</strong> buttons simultaneously for more than 5 seconds. The LED on the remote will blink, and the remote will unpair from the TV.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "pair-or-unpair-the-magic-remote-03",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "pair-or-unpair-the-magic-remote-03",
          text: "<p>Congrats!\r\nYou can now pair or unpair the Magic Remote.</p>",
          additional_help:
            "To learn more about pairing or unpairing the Magic Remote, please check out:",
          link_title: "How to Troubleshoot Your LG Magic Remote",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-troubleshoot-your-lg-magic-remote-CT10000018-1427121727809",
        },
      ],
      title: "Pair or unpair the Magic Remote",
      topic_note:
        "The Magic Remote uses an on-screen cursor (or pointer) that is similar to a mouse on a computer screen. You can use the Magic Remote to select and run functions on your TV. You will first need to register and pair the Magic Remote with your TV.\r\n",
    },
    "register-your-lg-tv": {
      category: "Getting started",
      category_slug: "getting-started",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 331,
                type: "round",
                width: 47,
              },
              {
                height: 44,
                left: 13,
                top: 149,
                type: "rectangle",
                width: 44,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "register-your-lg-tv-01",
          text: "<p>First, you will need to check your TV’s model and serial numbers. Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 209,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "register-your-lg-tv-02",
          text: "<p>Navigate to <strong>Support</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 164,
                top: 365,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "register-your-lg-tv-03",
          text: "<p>Select<strong> TV Information</strong>. The model and serial numbers will be displayed for your reference.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "register-your-lg-tv-04",
          text: '<p>Next, using a web browser, navigate to the LG Product Registration page.</p><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://www.lg.com/us/mylg/product-registration">https://www.lg.com/us/mylg/product-registration</a></p>',
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 423,
            top: 551,
            width: 74,
          },
          note: "<p>If you already have a MyLG account, select <strong>I Have An Account</strong> at the top of the section, and then enter your account credentials to sign in.</p>",
          preset: 1,
          src: "register-your-lg-tv-5",
          text: "<p>Fill out the required information in the Your Information section to create a MyLG account.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 423,
            top: 551,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "register-your-lg-tv-6",
          text: "<p>In the Product Information section, enter your TV’s Model Number, Serial Number, Place of Purchase, Purchased Date, Proof of Purchase (Optional), and Purchase Price.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 201,
            top: 321,
            width: 30,
          },
          note: "",
          preset: 1,
          src: "register-your-lg-tv-6",
          text: "<p>Select if you would like to sign up for email communications and text messages.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 196,
            top: 365,
            width: 41,
          },
          note: "",
          preset: 1,
          src: "register-your-lg-tv-8",
          text: "<p>Agree to the Privacy Policy and Terms and Conditions.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 399,
            top: 411,
            width: 120,
          },
          note: "",
          preset: 1,
          src: "register-your-lg-tv-8",
          text: "<p>Select <strong>REGISTER</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "register-your-lg-tv-10",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "register-your-lg-tv-01",
          text: "<p>Congrats!\r\nYou have now registered your TV.</p>",
          additional_help:
            "To learn more about registering your LG TV, please check out:",
          link_title: "How to Register Your TV With LG ThinQ",
          link: "https://www.lg.com/us/support/help-library/lg-thinq-how-to-register-your-tv-with-lg-thinq-CT10000018-20153095986130",
        },
      ],
      title: "Register your LG TV",
      topic_note:
        "<p>Your new LG TV can be registered to your MyLG account! Registering your product provides you with several benefits, such as firmware updates, warranty plans, product tips, and exclusive offers. Your MyLG account also allows you to check up on your products from one convenient place if you need to request service or verify your ownership.</p><p><strong>Note:</strong> You can also register your TV during your TV’s initial setup process.</p>",
    },
    "remove-a-bluetooth-device": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-01",
          text: "<p>When a Bluetooth device is initially connected to your TV, you can select Disconnect to quickly unpair it.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 60,
                top: 81,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-02",
          text: "<p>Or, navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 173,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-03",
          text: "<p>Navigate to <strong>General</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 162,
                top: 435,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-04",
          text: "<p>Select <strong>External Devices</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 70,
                top: 155,
                type: "rectangle",
                width: 265,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-05",
          text: "<p>Select <strong>Connect Bluetooth Controller</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 67,
                top: 226,
                type: "rectangle",
                width: 264,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-06",
          text: "<p>Select the Bluetooth device you wish to remove, and then follow the on-screen instructions to unpair it.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-07",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-a-bluetooth-device-07",
          text: "<p>Congrats!\r\nYou can now remove Bluetooth devices.</p>",
          additional_help:
            "To remove a Bluetooth device from your LG TV, please check out:",
          link_title: "How to Block My LG TV from Screen Sharing",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-block-my-lg-tv-from-screen-sharing-CT10000018-20153109272690",
        },
      ],
      title: "Remove a Bluetooth device",
      topic_note:
        "Bluetooth devices that have been previously connected to your TV can be disconnected and unpaired.\r\n",
    },
    "remove-apps": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 825,
            top: 251,
            width: 41,
          },
          note: "",
          preset: 0,
          src: "remove-apps-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 729,
                top: 337,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-apps-02",
          text: "<p>Navigate to the app list, and then navigate to the far right of the list. Select <strong>Edit App List</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 89,
                left: 675,
                top: 322,
                type: "rectangle",
                width: 66,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-apps-03",
          text: "<p>Navigate to the app you’d like to remove, and then select the <strong>Delete</strong> icon (the trash can) above the app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 55,
                left: 325,
                top: 307,
                type: "rectangle",
                width: 139,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-apps-04",
          text: "<p>Select <strong>Yes</strong> when prompted to remove the app. The app will be removed from your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "remove-apps-05",
          text: "<p>Repeat these steps to remove additional apps.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 0,
            top: 0,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "remove-apps-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "remove-apps-01",
          text: "<p>Congrats!\r\nYou can now remove apps.</p>",
          additional_help:
            "To learn more about removing apps from your LG TV, please check out:",
          link_title: "How to Install/Delete Apps on My LG Smart TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-install-delete-apps-on-my-lg-smart-tv-CT10000018-20153096004539",
        },
      ],
      title: "Remove apps",
      topic_note:
        "<p>Previously installed apps can be removed from your TV if desired. </p><p><strong>Note</strong>: Default apps cannot be deleted.</p>",
    },
    "room-to-room-share": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 825,
            top: 251,
            width: 41,
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 643,
                top: 337,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-02",
          text: "<p>Navigate to and open the <strong>Room to Room Share</strong> app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 195,
                left: 396,
                top: 234,
                type: "rectangle",
                width: 251,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>You can also select Connect from ThinQ app.\r\n</p>",
          preset: 0,
          src: "room-to-room-share-03",
          text: "<p>Select <strong>Connect from TV</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 48,
                left: 90,
                top: 231,
                type: "rectangle",
                width: 179,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-04",
          text: "<p>Next, select the TV you would like to connect to. You will be prompted to enter a code on the other TV. Enter the code using the remote control, and then select <strong>OK</strong> to complete the connection.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 484,
                top: 435,
                type: "rectangle",
                width: 133,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-05",
          text: "<p>Once the connection is complete, you can select <strong>Connect other TV</strong> or <strong>Edit TV</strong> name if desired. For this step, select <strong>Done</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 470,
                top: 351,
                type: "rectangle",
                width: 145,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>Only one TV will display the shared content.</p>",
          preset: 0,
          src: "room-to-room-share-06",
          text: "<p>Then, select <strong>Watch</strong> on the TV.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-07",
          text: "<p>To exit Room to Room Share, press any button on the remote, and then select <strong>Yes</strong> when prompted.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "room-to-room-share-01",
          text: "<p>Congrats!\r\nYou can now use Room to Room Share.</p>",
          additional_help:
            "To learn more about using the Room to Room Share feature with your LG TVs, please check out:",
          link_title: "Using Room to Room Share on your LG TV - WebOS 22",
          link: "https://www.youtube.com/watch?v=cuaPEH9366c&ab_channel=LGUSASupport",
        },
      ],
      title: "Room to Room Share",
      topic_note:
        "<p>The Room to Room Share app allows you to send and receive content from the LG TV you are currently using to another LG TV that is connected to the same network. </p><p><strong>Note</strong>: Some features may not be available depending on the TV model. Up to five connections can be made to one TV. To use voice control with the ThinQ app, the selected TVs must be registered to the ThinQ app on your mobile device.</p>",
    },
    "screen-mirror-from-a-pc": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "rectangle",
            height: 40,
            left: 110,
            top: 425,
            width: 40,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-1",
          text: "<p>To begin, navigate to and select <strong>Settings</strong> on your PC.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 393,
            top: 220,
            width: 129,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-2",
          text: "<p>Select <strong>Devices</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 370,
            top: 124,
            width: 138,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-3",
          text: "<p>Select <strong>Add Bluetooth or other device</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 323,
            top: 207,
            width: 217,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-4",
          text: "<p>Select <strong>Wireless display or dock</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 323,
            top: 174,
            width: 82,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-5",
          text: "<p>Select your TV, and then select <strong>Accept</strong> on your TV to begin casting your PC’s screen.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 343,
            top: 55,
            width: 240,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-6",
          text: "<p>To stop casting, select the Casting icon on your PC’s taskbar.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 481,
            top: 57,
            width: 69,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-6",
          text: "<p>Select <strong>Disconnect</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-8",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-pc-step-8",
          text: "<p>Congrats!\r\nYou can now screen mirror from your PC or laptop.</p>",
          additional_help: "To screen mirror to your LG TV using a PC, please check out:",
          link_title: "How Do I Mirror my PC screen to my LG TV?",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-screen-share-CT10000018-20150637965681",
        },
      ],
      title: "Screen mirror from a PC",
      topic_note:
        "<p>The screen mirroring (or screen sharing) function lets you share your PC’s screen (or laptop’s screen) with your TV. This lets you view photos, videos, or documents on a larger screen. <strong>Note:</strong> The steps may differ depending on your device model, software, and operating system.</p>",
    },
    "screen-mirror-from-android-devices": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 70,
            left: 456,
            top: 270,
            width: 70,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-01",
          text: "<p>To begin, swipe down from the top of your device’s screen to open the Quick settings panel, and then tap the <strong>Smart View</strong> icon.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 47,
            left: 357,
            top: 475,
            width: 211,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-02",
          text: "<p>Tap <strong>Continue</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 47,
            left: 357,
            top: 475,
            width: 211,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-03",
          text: "<p>Tap <strong>Continue</strong> to allow the permissions.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 463,
            top: 468,
            width: 86,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-04",
          text: "<p>Select your TV, and then tap <strong>Start now </strong>on the pop-up.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 41,
                left: 501,
                top: 337,
                type: "rectangle",
                width: 115,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "screen-mirror-from-android-devices-05",
          text: "<p>Select <strong>Accept</strong> on your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 70,
            left: 456,
            top: 274,
            width: 70,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-06",
          text: "<p>To stop casting, swipe down from the top of the device’s screen to open the Quick settings panel, and then tap the <strong>Smart View</strong> icon again.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-android-devices-01",
          text: "<p>Congrats!\r\nYou can now screen mirror from Android devices.</p>",
          additional_help:
            "To screen mirror to your LG TV using an Android device, please check out:",
          link_title: "How to use the Screen Share On A LG TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-screen-share-CT10000018-20150637965681",
        },
      ],
      title: "Screen mirror from Android devices",
      topic_note:
        "<p>The Screen mirroring (or screen sharing) function lets you share your Android device’s screen with your TV. This includes devices such as your Android phone or tablet and lets you view photos, videos, or documents on a larger screen. </p><p><strong>Note:</strong> The steps may differ depending on your device model, software, and operating system.</p>",
    },
    "screen-mirror-from-ios-devices": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "rectangle",
            height: 27,
            left: 110,
            top: 98,
            width: 137,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-01",
          text: "<p>To begin screen mirroring from a Mac, navigate to and select <strong>System Settings</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 26,
            left: 289,
            top: 239,
            width: 104,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-02",
          text: "<p>Select <strong>Bluetooth</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 30,
            left: 573,
            top: 316,
            width: 49,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-02",
          text: "<p>Hover your mouse over your TV’s name under Nearby Devices, and then select <strong>Connect</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 501,
            top: 337,
            width: 115,
          },
          note: "",
          preset: 0,
          src: "screen-mirror-from-ios-devices-04",
          text: "<p>Select <strong>Accept</strong> on your TV to begin casting your Mac’s screen.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 30,
            left: 549,
            top: 273,
            width: 61,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-05",
          text: "<p>To stop casting, navigate back to the Bluetooth menu, and then hover the mouse over your TV’s name under My Devices. Select <strong>Disconnect</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "down",
            height: 120,
            left: 526,
            top: 29,
            width: 50,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-06",
          text: "<p>To start screen mirroring from an iPhone or iPad, swipe down from the top right corner of the device’s screen to open the control panel.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 60,
            left: 404,
            top: 215,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-07",
          text: "<p>Tap the <strong>Screen Mirroring</strong> icon.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 40,
            left: 352,
            top: 261,
            width: 219,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-08",
          text: "<p>Select your TV, and then enter the AirPlay Passcode that appears on the TV screen into your device.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "down",
            height: 120,
            left: 528,
            top: 29,
            width: 50,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-09",
          text: "<p>To stop mirroring, swipe down from the top right corner of the device’s screen to open the control panel.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 60,
            left: 404,
            top: 216,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-10",
          text: "<p>Tap <strong>Screen Mirroring</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 36,
            left: 355,
            top: 379,
            width: 214,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-from-ios-devices-11",
          text: "<p>Tap <strong>Stop Mirroring</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "screen-mirror-from-ios-devices-12",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "screen-mirror-from-ios-devices-12",
          text: "<p>Congrats!\r\nYou can now screen mirror from iOS devices.</p>",
          additional_help:
            "To screen mirror to your LG TV using an iOS device, please check out:",
          link_title: "How to use the Screen Share On A LG TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-screen-share-CT10000018-20150637965681",
        },
      ],
      title: "Screen mirror from iOS devices",
      topic_note:
        "<p>The screen mirroring (or screen sharing) function lets you share your iOS device’s screen with your TV. This includes devices such as your Mac, iPhone, or iPad and lets you view photos, videos, or documents on a larger screen. </p><p><strong>Note:</strong> The steps may differ depending on your device model, software, and operating system.</p>",
    },
    "screen-mirror-with-apple-airplay-2": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 817,
            top: 243,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-apple-airplay-2-01",
          text: "<p>Press and hold the <strong>Home button</strong> on your TV’s remote control to open Home Hub.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 83,
            left: 301,
            top: 174,
            width: 110,
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-apple-airplay-2-02",
          text: "<p>Navigate to and select <strong>AirPlay</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-apple-airplay-2-03",
          text: "<p>Check the Wi-Fi network and TV name if needed.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "down",
            height: 120,
            left: 523,
            top: 22,
            width: 50,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-04",
          text: "<p>Using your iPhone, swipe down from the top right corner of the screen to open the control panel.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 60,
            left: 404,
            top: 215,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-05",
          text: "<p>Tap the <strong>Screen Mirroring</strong> icon.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 40,
            left: 353,
            top: 261,
            width: 217,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-06",
          text: "<p>Tap your TV’s name in the list.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 843,
            top: 556,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-07",
          text: "<p>Then, enter the AirPlay Passcode that appears on the TV screen into your phone. You can now mirror your iPhone’s screen to your TV!\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "down",
            height: 120,
            left: 528,
            top: 29,
            width: 50,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-08",
          text: "<p>To stop mirroring, swipe down from the top right corner of your phone’s screen to open the control panel.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 60,
            left: 404,
            top: 216,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-09",
          text: "<p>Tap <strong>Screen Mirroring</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 40,
            left: 354,
            top: 378,
            width: 217,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-apple-airplay-2-10",
          text: "<p>Tap <strong>Stop Mirroring</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-apple-airplay-2-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-apple-airplay-2-01",
          text: "<p>Congrats! You can now use Apple AirPlay2.</p>",
          additional_help:
            "To learn more about using Apple AirPlay 2 to screen mirror to your LG TV, please check out:",
          link_title: "How To Use Airplay On Your LG TV w/ ThinQ",
          link: "https://www.youtube.com/watch?v=nPFkYChlGxs&ab_channel=LGUSASupport",
        },
      ],
      title: "Screen mirror with Apple AirPlay2",
      topic_note:
        "<p>You can use Apple AirPlay 2 to mirror your iOS device’s screen to your TV. <br><strong>Note:</strong> Your iOS device and TV must be connected to the same Wi-Fi network.</p>",
    },
    "screen-mirror-with-magic-tap": {
      category: "Connecting external devices",
      category_slug: "connecting-external-devices",
      steps: [
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 845,
            top: 558,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-1",
          text: "<p>Navigate to a video or other content on your phone, and then tap your phone on the TV remote’s NFC icon.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 43,
            left: 508,
            top: 447,
            width: 43,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-2",
          text: "<p>An NFC connection pop-up will appear on your phone. Tap <strong>Mobile Screen Mirroring</strong>, and then tap <strong>OK</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "screen-mirror-with-magic-tap-3",
          text: "<p>Your phone’s screen will display on the TV.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 845,
            top: 559,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-1",
          text: "<p>You can also view your phone’s contents on the TV while using your phone at the same time. Tap your phone on the remote’s NFC icon.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 509,
            top: 447,
            width: 41,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-5",
          text: "<p>On the NFC connection pop-up, tap <strong>Mobile Contents on TV</strong>, and then tap <strong>OK</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 80,
            left: 422,
            top: 121,
            width: 80,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-6",
          text: "<p>Next, select the content you would like to watch. For instance, you can select a photo or video.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 478,
            top: 483,
            width: 75,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-7",
          text: "<p>Tap <strong>Play</strong>. The content will begin streaming to your TV. You can now use your phone to send messages or browse apps while the content plays on your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 844,
            top: 558,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-8",
          text: "<p>You can also play the TV’s audio through your phone. Tap your phone on the remote’s NFC icon.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 508,
            top: 448,
            width: 41,
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-9",
          text: "<p>On the NFC connection pop-up, tap <strong>Play TV Sound</strong>, and then tap <strong>OK</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 843,
            top: 557,
            width: 74,
          },
          note: "<p>Up to three phones can be connected at once.</p>",
          preset: 1,
          src: "screen-mirror-with-magic-tap-10",
          text: "<p>The TV’s sound will begin playing through your phone.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-10",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "screen-mirror-with-magic-tap-10",
          text: "<p>Congrats!\r\nYou can now use Magic Tap.</p>",
          additional_help:
            "To learn more about using Magic Tap to screen mirror to your LG TV, please check out:",
          link_title: "How To Use The Magic Tap",
          link: "https://www.youtube.com/watch?v=rw7RaT2svx0&ab_channel=LGUSASupport",
        },
      ],
      title: "Screen mirror with Magic Tap",
      topic_note:
        "<p>The Magic Tap feature lets you mirror your mobile phone’s screen to your TV. You can share photos and videos to your TV, as well as play the TV’s sound on your phone. </p><p><strong>Note:</strong> This feature may differ depending on your mobile device’s model or operating system.</p>",
    },
    "set-up-lg-thinq-with-an-android-device": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "rectangle",
            height: 71,
            left: 462,
            top: 370,
            width: 57,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-1",
          text: "<p>Using your phone, navigate to and open the <strong>Play Store</strong> app.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 44,
            left: 348,
            top: 50,
            width: 168,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-2",
          text: "<p>Tap the search bar, and then search for and select <strong>LG ThinQ</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 496,
            top: 154,
            width: 80,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-3",
          text: "<p>Tap <strong>Install</strong> next to LG ThinQ.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 515,
            top: 155,
            width: 63,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-4",
          text: "<p>Tap <strong>Open</strong>. Allow the permissions if necessary.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 410,
            top: 442,
            width: 105,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-5",
          text: "<p>Swipe through the introduction, and then tap <strong>SIGN IN</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 49,
            left: 345,
            top: 285,
            width: 235,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-6",
          text: "<p>Enter your LG account credentials and tap <strong>Login</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 400,
            top: 405,
            width: 124,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-7",
          text: "<p>Allow the permissions when prompted.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 343,
            top: 138,
            width: 96,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-9",
          text: "<p>From the ThinQ app’s Home screen, tap <strong>Add a device</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 48,
            left: 346,
            top: 474,
            width: 232,
          },
          note: "<p>You can scan the QR attached to the device as well.</p>",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-10",
          text: "<p>Tap <strong>Try adding manually</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 391,
            top: 484,
            width: 143,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-11",
          text: "<p>Make sure your TV is turned on, and then tap <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 70,
            left: 290,
            top: 209,
            width: 70,
          },
          note: "",
          preset: 0,
          src: "set-up-lg-thinq-with-an-android-device-12",
          text: "<p>Under SEARCH NEARBY, select your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 43,
            left: 410,
            top: 483,
            width: 104,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-13",
          text: "<p>Enter the access code that appears on your TV, and then tap <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 459,
            top: 484,
            width: 118,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-14",
          text: "<p>Tap <strong>Log in</strong>, and then follow the on-screen instructions.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 845,
            top: 558,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-15",
          text: "<p>Tap your TV’s card to begin using your phone as a remote control for your TV. You can open the Settings menu, view and switch inputs, navigate to the Home screen, adjust the volume, and change the channels.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 93,
            left: 360,
            top: 319,
            width: 204,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-15",
          text: "<p>In the <strong>Share</strong> section, you can share your phone’s screen to the TV, play your phone's sound through the TV’s speaker, and listen to the TV’s sound on your phone. For this example, tap <strong>Play Phone’s Photos/Videos/Music on TV</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 485,
            top: 484,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-17",
          text: "<p>Choose from Photo, Video, or Music, and then select your desired media. Tap <strong>Play</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 501,
            top: 367,
            width: 114,
          },
          note: "<p>To stop sharing, tap <strong>No</strong>.</p>",
          preset: 0,
          src: "set-up-lg-thinq-with-an-android-device-18",
          text: "<p>Select <strong>Yes</strong> on your TV when prompted. You can now share your phone’s screen to your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 118,
            left: 350,
            top: 262,
            width: 225,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-19",
          text: "<p>In the <strong>Apps</strong> section, you can launch recently used apps on your TV. For example, tap LG Channels. The LG Channels app will open on your TV. You can use your phone to navigate the TV or open another app.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 131,
            left: 350,
            top: 388,
            width: 226,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-19",
          text: "<p>In the <strong>TV/Inputs</strong> section, you can view and switch inputs. For example, tap HDMI 1 to access the device connected to that input on your TV.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-9",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-with-an-android-device-9",
          text: "<p>Congrats! You can now use LG ThinQ with your TV.</p>",
          additional_help:
            "If you’re having trouble setting up the LG ThinQ app with an Android device, please check out:",
          link_title: "How to Set Up the LG ThinQ App on Your LG Smart TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-set-up-the-lg-thinq-app-on-your-lg-smart-tv-CT10000018-20152745625356",
        },
      ],
      title: "Set up LG ThinQ with an Android device",
      topic_note:
        "<p>The LG ThinQ app will turn your mobile phone into a remote control for your TV! You can use your phone to open your TV’s apps, adjust the volume, browse channels, and share your phone’s screen. </p><p><strong>Note</strong>: You may need to allow access to your TV when using certain options.</p>",
    },
    "set-up-personal-profiles": {
      category: "Customizing the settings",
      category_slug: "customizing-the-settings",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 822,
            top: 248,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-01",
          text: "<p>Press the Home button on your TV’s remote control.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 11,
            top: 77,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-02",
          text: "<p>Navigate to and select the <strong>Profile</strong> icon in the top left corner of the screen.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 140,
            left: 341,
            top: 243,
            width: 111,
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-03",
          text: "<p>Select <strong>Add Account</strong> to add a new account and profile.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 437,
                top: 324,
                type: "rectangle",
                width: 265,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-04",
          text: "<p>You can choose Sign in with the mobile ThinQ app, Sign in with the Mobile Web, or Sign in on TV. For this example, select <strong>Sign in on TV</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 283,
                top: 186,
                type: "rectangle",
                width: 225,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-05",
          text: "<p>Select <strong>LG Account Sign In</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 387,
                top: 460,
                type: "rectangle",
                width: 160,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>Repeat this process to add additional profiles.</p>",
          preset: 0,
          src: "set-up-personal-profiles-06",
          text: "<p>Enter your LG Account credentials, and then select <strong>Sign In</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-07",
          text: "<p>Your new personal profile will be added to the TV, and you will be brought to the TV’s Home screen. You can use your personal profile to browse apps, search for content, and adjust settings as desired.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 11,
                top: 77,
                type: "round",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-08",
          text: "<p>To change profiles, select the <strong>Profile</strong> icon in the top left corner of the screen.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 162,
                left: 242,
                top: 244,
                type: "rectangle",
                width: 150,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-09",
          text: "<p>Then, select another profile to sign into it.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-08",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-personal-profiles-09",
          text: "<p>Congrats!\r\nYou have now added a personal profile.</p>",
          additional_help:
            "To learn more about setting up personal profiles on your LG TV, please check out:",
          link_title: "",
          link: "",
        },
      ],
      title: "Set up personal profiles",
      topic_note:
        "<p>Each person in your home can set up their own user profile on your TV. These profiles provide access to preferred streaming services, apps, and other recommended content.</p>",
    },
    "set-up-quick-access-shortcuts": {
      category: "Using the Magic Remote",
      category_slug: "using-the-magic-remote",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 55,
                left: 7,
                top: 337,
                type: "rectangle",
                width: 55,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-01",
          text: "<p>Navigate to and select the app, channel, or input that you would like to assign to Quick Access.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 826,
            top: 98,
            width: 41,
          },
          note: "<p>9 is automatically set to Quick Help.</p>",
          preset: 0,
          src: "set-up-quick-access-shortcuts-02",
          text: '<p>Press and hold the number button on the remote control that you would like to register. For this example, press and hold the number "1".</p>',
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 41,
                left: 498,
                top: 386,
                type: "rectangle",
                width: 85,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-03",
          text: "<p>Select <strong>YES</strong> on the registration pop-up window. The app, channel, or input you selected will now be registered to your desired number on the remote control.</p>",
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 819,
            top: 91,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-04",
          text: "<p>Now, you can press and hold that number button to access the app, channel, or input. \r\n</p>",
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 846,
            top: 160,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-05",
          text: "<p>To check or edit your Quick Access shortcuts, press and hold the 0 button on the remote control.\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-06",
          text: "<p>The Quick Access edit screen will appear. From here, you can deregister a shortcut, register a new shortcut, and view instructions for using Quick Access.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-06",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-quick-access-shortcuts-06",
          text: "<p>Congrats!\r\nYou can now set up Quick Access shortcuts.</p>",
          additional_help:
            "To set up Quick Access shortcuts on your LG TV, please check out:",
          link_title: "How to Use the Quick Access Buttons",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-use-the-quick-access-buttons-CT10000018-20153207569609",
        },
      ],
      title: "Set up Quick Access shortcuts",
      topic_note:
        "<p>You can set Quick Access shortcuts for your desired apps, channels, or inputs by assigning these items to a number on your TV’s remote control. Then, just press and hold the registered number button to launch the app, channel, or input. </p><p><strong>Note:</strong> To access Accessibility shortcuts, you can press and hold the 0 button on the remote control.</p>",
    },
    "set-up-voice-command": {
      category: "Using the Magic Remote",
      category_slug: "using-the-magic-remote",
      steps: [
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 847.5,
            top: 233,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-01",
          text: "<p>Press and hold the <strong>Microphone</strong> button on the TV’s remote control.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-02",
          text: "<p>Then, speak a command. For example, you can say “Open YouTube.” Release the Microphone button when you are finished speaking.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-03",
          text: "<p>The YouTube app will open on your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 847.5,
            top: 233,
            width: 55,
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-03",
          text: "<p>To give additional commands or ask questions, simply press and hold the <strong>Microphone</strong> button again; your TV will display the results. Repeat this step whenever you would like to navigate your TV using your voice.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "set-up-voice-command-03",
          text: "<p>Congrats! You can now use Voice commands to navigate your TV.</p>",
          additional_help: "To set up Voice commands on your LG TV, please check out: ",
          link_title: "Using Voice Commands",
          link: "https://www.lg.com/us/support/help-library/lg-tv-using-voice-commands-CT10000018-20153219134177",
        },
      ],
      title: "Set up Voice command",
      topic_note:
        "You can ask your TV to perform certain functions, such as opening apps and menus, by using the LG ThinQ Voice command feature. You will need your TV’s remote control to perform Voice commands.",
    },
    "sports-alerts": {
      category: "Use LG TV features",
      category_slug: "use-lg-tv-features",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 825,
            top: 251,
            width: 41,
          },
          note: "",
          preset: 0,
          src: "sports-alerts-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 590,
                top: 337,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-02",
          text: "<p>Navigate to and select the <strong>Sports</strong> <strong>Alerts </strong>app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 70,
                left: 24,
                top: 181,
                type: "round",
                width: 70,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>You can also browse the Popular league list and select your favorite sport, as well as download suggested sports apps.</p>",
          preset: 0,
          src: "sports-alerts-03",
          text: "<p>Select <strong>Add</strong> to begin.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 24,
                top: 146,
                type: "rectangle",
                width: 174,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-04",
          text: "<p>Select a sports league from the list on the left.\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 111,
                left: 525,
                top: 268,
                type: "rectangle",
                width: 98,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>Up to 20 teams can be added to your favorites list.</p>",
          preset: 0,
          src: "sports-alerts-05",
          text: "<p>Then, select a team from the list on the right. The team will be added to your favorites list.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 41,
            left: 825,
            top: 334,
            width: 41,
          },
          note: "",
          preset: 0,
          src: "sports-alerts-05",
          text: "<p>Press <strong>Back</strong> on the remote control to return to the Sports Alert Home screen.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 80,
                left: 89,
                top: 176,
                type: "round",
                width: 80,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-07",
          text: "<p>Select a team from your favorites list at the top to view the team’s Game Schedule and Related videos. \r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "sports-alerts-08",
          text: "<p>You can also select from the following options:\r\n\r\n\r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 192,
                top: 241,
                type: "rectangle",
                width: 133,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-08",
          text: "<p><strong>Search Webs</strong>: Sports Alert will display an internet search for your team.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 317,
                top: 241,
                type: "rectangle",
                width: 133,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-08",
          text: "<p><strong>My Team</strong>: Remove the team from your favorites list.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 443,
                top: 242,
                type: "rectangle",
                width: 133,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-08",
          text: "<p><strong>Set Alarms</strong>: Manage the Game Start Alarm, Real-time Score Alarm, and Game Result Alarm.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-12",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "sports-alerts-12",
          text: "<p>Congrats!\r\nYou can now use Sports Alerts.</p>",
          additional_help:
            "To learn more about tracking your favorite sports teams with the Sports Alerts feature on your LG TV, please check out:",
          link_title: "Tracking Your Favorite Team with Sports Alert",
          link: "https://www.youtube.com/watch?v=q7r_vxeMU6s&ab_channel=LGUSASupport",
        },
      ],
      title: "Sports Alerts",
      topic_note:
        "You can support your favorite sports teams or athletes with the Sports Alert feature. This allows you to view live scores and upcoming game schedules, as well as receive notifications while watching TV. ",
    },
    "set-up-lg-thinq-with-an-ios-device": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "rectangle",
            height: 65,
            left: 405,
            top: 196,
            width: 54,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-1",
          text: "<p>Using your phone, navigate to and open the <strong>App Store</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 44,
            left: 540,
            top: 513,
            width: 44,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-2",
          text: "<p>Tap <strong>Search</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 337,
            top: 99,
            width: 84,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-3",
          text: "<p>Search for and select <strong>LG ThinQ</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 514,
            top: 107,
            width: 71,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-4",
          text: "<p>Tap <strong>GET</strong> next to LG ThinQ.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 516,
            top: 111,
            width: 67,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-5",
          text: "<p>Wait for the app to install, and then tap <strong>OPEN</strong>. Allow the permissions if necessary.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 400,
            top: 504,
            width: 123,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-6",
          text: "<p>Swipe through the introduction, and then tap <strong>Sign In</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 49,
            left: 341,
            top: 279,
            width: 241,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-7",
          text: "<p>Enter your LG account credentials and tap <strong>Login</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 45,
            left: 344,
            top: 496,
            width: 236,
          },
          note: "<p>You can add your phone number to ThinQ if desired by tapping Next. For this example, tap <strong>Skip</strong>.</p>",
          preset: 1,
          src: "set-up-lg-thinq-ios-8",
          text: "<p>Agree to the Terms of Use and Privacy Policy.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 365,
            top: 391,
            width: 193,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-9",
          text: "<p>Allow the permissions when prompted.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 340,
            top: 153,
            width: 110,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-11",
          text: "<p>From the ThinQ app’s Home screen, tap <strong>Add a device</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 53,
            left: 347,
            top: 498,
            width: 228,
          },
          note: "<p>You can scan the QR attached to the device as well.</p>",
          preset: 1,
          src: "set-up-lg-thinq-ios-12",
          text: "<p>Tap <strong>Try adding manually</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 387,
            top: 502,
            width: 150,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-13",
          text: "<p>Make sure your TV is turned on, and then tap <strong>Next</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 70,
            left: 338,
            top: 175,
            width: 70,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-14",
          text: "<p>Under SEARCH NEARBY, select your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 409,
            top: 310,
            width: 107,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-15",
          text: "<p>Enter the access code that appears on your TV, and then tap <strong>OK</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 42,
            left: 458,
            top: 504,
            width: 122,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-16",
          text: "<p>Tap <strong>Log in</strong>, and then follow the on-screen instructions.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 845,
            top: 559,
            width: 74,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-17",
          text: "<p>Tap your TV’s card to begin using your phone as a remote control for your TV. You can open the Settings menu, view and switch inputs, navigate to the Home screen, adjust the volume, and change the channels.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 96,
            left: 357,
            top: 366,
            width: 209,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-18",
          text: "<p>In the Share section, you can share your phone’s screen to the TV, play your phone's sound through the TV’s speaker, and listen to the TV’s sound on your phone. For this example, tap <strong>Play Phone’s Photos/Videos/Music on TV</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 41,
            left: 516,
            top: 507,
            width: 60,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-19",
          text: "<p>Choose from Photo, Video, or Music, and then select your desired media. Tap <strong>Play</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 40,
                left: 502,
                top: 368,
                type: "rectangle",
                width: 113,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>To stop sharing, tap Cancel.</p>",
          preset: 0,
          src: "set-up-lg-thinq-ios-20",
          text: "<p>Select <strong>Yes</strong> on your TV when prompted. You can now share your phone’s screen to your TV.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 118,
            left: 341,
            top: 271,
            width: 241,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-21",
          text: "<p>In the Apps section, you can launch recently used apps on your TV. For example, tap LG Channels. The LG Channels app will open on your TV. You can use your phone to navigate the TV or open another app.</p>",
        },
        {
          gesture: {
            gesture_type: "rectangle",
            height: 124,
            left: 339,
            top: 400,
            width: 241,
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-22",
          text: "<p>In the TV/Inputs section, you can view and switch inputs. For example, tap HDMI 1 to access the device connected to that input on your TV.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-11",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 1,
          src: "set-up-lg-thinq-ios-11",
          text: "<p>Congrats! You can now use LG ThinQ with your TV.</p>",
          additional_help:
            "If you’re having trouble setting up the LG ThinQ app with an iOS device, please check out:",
          link_title: "How to Set Up the LG ThinQ App on Your LG Smart TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-set-up-the-lg-thinq-app-on-your-lg-smart-tv-CT10000018-20152745625356",
        },
      ],
      title: "Set up LG ThinQ with an iOS device",
      topic_note:
        "<p>The LG ThinQ app will turn your mobile phone into a remote control for your TV! You can use your phone to open your TV’s apps, adjust the volume, browse channels, and share your phone’s screen. </p><p><strong>Note</strong>: You may need to allow access to your TV when using certain options.</p>",
    },
    "unbox-your-lg-tv": {
      category: "Unboxing",
      category_slug: "unboxing",
      steps: null,
      type: "youtube-video",
      video_src: "zLrfiu4yKow?si=T_w-EO4xDt8M_lj9",
      video_title: "How to Install your LG OLED TV Stand",
      title: "Unbox your LG TV",
      topic_note:
        "When you receive your new LG TV, you’ll need to unbox it and install its stand. We recommend that you ask a friend to help set up the TV with you.",
      additional_help: "To learn more about unboxing your LG TV, please check out:",
      link_title: "LG TV - How to Install a Universal Stand",
      link: "https://www.lg.com/us/support/help-library/lg-tv-how-to-install-a-universal-stand-CT10000018-20153130756628",
    },
    "use-intelligent-edit": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 57,
                left: 7,
                top: 336,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-01",
          text: "<p>Navigate to your desired app on the Home screen. \r\n</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 57,
                left: 7,
                top: 336,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-01",
          text: "<p>Select your desired app on the Home screen. \r\n</p>",
          accordions: [
            {
              icon: "+",
              title: "Game Feature",
              description: (
                <ul>
                  <li>
                    <h4>Game Genre</h4>
                    <p>Optimize the screen based on the current game genre.</p>
                  </li>
                  <li>
                    <h4>OLED Motion/OLED Motion Pro</h4>
                    <p>Eliminate afterimages to provide a clearer picture.</p>
                  </li>
                  <li>
                    <h4>Reduce Blue Light</h4>
                    <p>Adjust the screen&#39;s blue light output to reduce eye strain.</p>
                  </li>
                </ul>
              ),
            },
            {
              icon: "+",
              title: "Picture Features",
              description: (
                <p>
                  Crisp and refreshing fruit. Apples are known for their versatility and
                  nutritional benefits. They come in a variety of flavors and are great
                  for snacking, baking, or adding to salads.
                </p>
              ),
            },
            {
              icon: "+",
              title: "Sound Features",
              description: (
                <p>
                  Crisp and refreshing fruit. Apples are known for their versatility and
                  nutritional benefits. They come in a variety of flavors and are great
                  for snacking, baking, or adding to salads.
                </p>
              ),
            },
          ],
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 847,
            top: 286,
            width: 55,
          },
          note: "<p>Or, navigate to the far right of the app list on the WebOS Home screen, and then select <strong>Edit App List</strong>.</p>",
          preset: 0,
          src: "use-intelligent-edit-01",
          text: "<p>Press and hold the <strong>Wheel (OK)</strong> button on the TV’s remote control to open the Edit App List mode.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 851,
            top: 290,
            width: 47,
          },
          note: "<p>You can also delete an app by selecting the <strong>Delete</strong> icon (the trash can) above the app. Keep in mind that default apps cannot be deleted.</p>",
          preset: 0,
          src: "use-intelligent-edit-03",
          text: "<p>Using the remote, move the app to your desired position, and then press the <strong>Wheel (OK)</strong> button to set it.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 722,
                top: 90,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-04",
          text: "<p>Next, select <strong>Options</strong> (the three vertical dots) in the upper right corner.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 549,
                top: 142,
                type: "rectangle",
                width: 225,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-05",
          text: "<p>Select <strong>Reset App Order</strong> to reset the app order.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 46,
                left: 510,
                top: 369,
                type: "rectangle",
                width: 117,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-06",
          text: "<p>Select <strong>Yes</strong> to confirm.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 54,
                left: 549,
                top: 173,
                type: "rectangle",
                width: 226,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-07",
          text: "<p>Navigate back to <strong>Options</strong>, and then select <strong>Reset Usage Data</strong> to reset your app usage and viewing history.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 117,
                top: 300,
                type: "rectangle",
                width: 171,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-08",
          text: "<p>Select <strong>Reset Usage Data</strong> again when prompted. Once reset, it may take some time to receive content recommendations again.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 51,
                left: 334,
                top: 441,
                type: "rectangle",
                width: 127,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-09",
          text: "<p>When you are finished, select <strong>Close</strong> the bottom of the screen to exit the Edit App List mode.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-01",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-intelligent-edit-01",
          text: "<p>Congrats!\r\nYou can now use Intelligent edit.</p>",
          additional_help:
            "If you're experiencing issue with connecting to your wifi network, please checkout",
          link_title: "How to Troubleshoot Your TV Internet Wi-Fi Connection",
          link: "https://www.lg.com/us/support/help-library/troubleshooting-your-internet-connection-tv-CT10000018-1426626051711",
        },
      ],
      title: "Use Intelligent edit ",
      topic_note:
        "Apps on your TV’s Home screen will be automatically arranged according to their use. If desired, you can rearrange the apps, reset the order, or reset your app usage data.\r\n",
    },
    "use-lg-channels": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 822,
            top: 248,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 7,
                top: 337,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-02",
          text: "<p>Navigate to and open <strong>LG Channels</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-03",
          text: "<p>You can browse the categories on the Home screen, such as Featured, Recently Added Movies, and Popular Shows. \r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-03",
          text: "<p>You can also select from the categories at the top of the screen, such as On Demand, Kids & Family, and Live. </p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 673,
                top: 85,
                type: "rectangle",
                width: 54,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-03",
          text: "<p>Or, select the Search icon in the top right corner to search for a program or movie.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 246,
                top: 442,
                type: "rectangle",
                width: 130,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-06",
          text: "<p>To watch a program or movie, select it, and then select <strong>Play</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "tapHold",
            height: 55,
            left: 846,
            top: 286,
            width: 55,
          },
          note: "<p>This function is not available when watching movies.</p>",
          preset: 0,
          src: "use-lg-channels-07",
          text: "<p>While a program is playing, press the <strong>Wheel (OK)</strong> button on the remote to view additional information.</p>",
        },
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 822,
            top: 248,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-01",
          text: "<p>Press the <strong>Home </strong>button on the remote control to exit LG Channels.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-09",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-channels-09",
          text: "<p>Congrats!\r\nYou can now use LG Channels.</p>",
          additional_help:
            "To learn more about using LG Channels on your LG TV, please check out:",
          link_title: "",
          link: "",
        },
      ],
      title: "Use LG Channels",
      topic_note:
        "LG Channels combines internet channels with your broadcast or cable lineup, so you can enjoy all of your favorites in one place. Plus, it’s completely free!\r\n",
    },
    "use-lg-fitness": {
      category: "Customizing apps & contents",
      category_slug: "customizing-apps-&-contents",
      steps: [
        {
          gesture: {
            gesture_type: "round",
            height: 47,
            left: 822,
            top: 248,
            width: 47,
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-01",
          text: "<p>Press the <strong>Home</strong> button on your TV’s remote control.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 56,
                left: 538,
                top: 337,
                type: "rectangle",
                width: 56,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-02",
          text: "<p>Navigate to and select <strong>APPS</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 82,
                left: 17,
                top: 155,
                type: "rectangle",
                width: 200,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-03",
          text: "<p>Search for and select <strong>LG Fitness</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 14,
                top: 267,
                type: "rectangle",
                width: 189,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-04",
          text: "<p>Select <strong>Install</strong> to install the app.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 14,
                top: 267,
                type: "rectangle",
                width: 188,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-05",
          text: "<p>Select <strong>Launch</strong> when the app has been installed.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 46,
                left: 272,
                top: 441,
                type: "rectangle",
                width: 120,
              },
            ],
            gesture_type: "double",
          },
          note: "<p>You can fill out a questionnaire if desired. For this example, select Skip.</p>",
          preset: 0,
          src: "use-lg-fitness-06",
          text: "<p>Agree to the Terms and Conditions and Privacy Policy, and then select <strong>OK</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-07",
          text: "<p>At the top of the screen, you can select from Category, Home, and Dashboard:\r\n\r\n\r\n</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>You can add the workout to your favorites by selecting ADD TO FAVORITE below the video’s thumbnail.</p>",
          preset: 0,
          src: "use-lg-fitness-08",
          text: "<p><strong>Category</strong>: If you’re looking for a specific workout, you can narrow down your search by selecting from High Intensity, Muscular Strength, Yoga, Stretching, Cardio, or Pilates. Then, select a video to begin.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-07",
          text: "<p><strong>Home</strong>: Select from different categories such as Cardio Dance, Beginner’s Workout, Full Body HIIT, and Family Yoga. You can also view popular fitness channels on YouTube and replay your recently viewed videos. To create your own routine, navigate to and select Make a Workout Routine, then select Add Content, and then select your desired category and video. Select Add Content again to add more videos, then tap Done when you are finished, or tap Reset All to clear your selections.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-09",
          text: "<p><strong>Dashboard</strong>: You’ll find your personal workout summary on this screen. This includes Status, Workout Completed Days, Category Usage Rate, Workout Time Statistics, and History. To change the dates, select the left and right arrows at the top of the screen next to the current range of dates, or select the drop-down menu to the right.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-07",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-lg-fitness-07",
          text: "<p>Congrats!\r\nYou can now use LG Fitness.</p>",
          additional_help:
            "To learn more about using LG Fitness on your LG TV, please check out:",
          link_title: "",
          link: "",
        },
      ],
      title: "Use LG Fitness",
      topic_note:
        "LG’s first health platform, LG Fitness, is here to help you and your family enjoy a healthier lifestyle! LG Fitness will recommend workout videos based on categories such as High Intensity, Cardio, Yoga, and more, so there’s plenty of options to choose from. Or, you can create your own workout session by adding your favorite videos to a routine. When you’ve finished a full week of exercises, you can use the Dashboard to check on your progress.\r\n",
    },
    "use-picture-modes": {
      category: "Customizing the settings",
      category_slug: "customizing-the-settings",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 44,
                left: 65,
                top: 86,
                type: "rectangle",
                width: 44,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 100,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-02",
          text: "<p>Select <strong>Picture</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 65,
                left: 164,
                top: 158,
                type: "rectangle",
                width: 263,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-03",
          text: "<p>Select <strong>Select Mode</strong>.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-04",
          text: "<p>You can choose from the following modes:</p><p><strong>Personalized Picture:</strong> Analyzes the image quality using AI to deliver the best possible picture. If you have not set this up, select Yes to run the Personalized Picture Wizard.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-05",
          text: "<p><strong>Vivid:</strong> Sharpens the image by increasing the contrast, brightness, and sharpness.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-06",
          text: "<p><strong>Standard:</strong> Displays the image using natural contrast, brightness, and sharpness levels.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>This mode is only available when using Normal Signals.</p>",
          preset: 0,
          src: "use-picture-modes-09",
          text: "<p><strong>Auto Power Save:</strong> Reduces power consumption by dimming the screen. <br><br></p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-07",
          text: "<p><strong>Cinema: </strong>Suitable when using an HDR video signal while watching movies.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>This mode is only available when using Normal Signals. The name of the sport may differ depending on the region.</p>",
          preset: 0,
          src: "use-picture-modes-10",
          text: "<p><strong>Sports:</strong> Sharpens rapid movements, such as the action of throwing a ball, when watching sports.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-12",
          text: "<p><strong>FILMMAKER MODE: </strong>Provides optimized cinema-quality images that have been certified by the UHD Alliance.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-13",
          text: "<p><strong>Expert (Bright space, daytime) Expert (Dark space, night):</strong> Suitable for viewing movies in a dark environment. Expert (Dark space, night) uses a lower color temperature than Expert (Bright space, daytime).</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-06",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-picture-modes-06",
          text: "<p>Congrats!\r\nYou are now able to use picture modes.</p>",
          additional_help:
            "To configure the different Picture modes on your LG TV, please check out:",
          link_title: "LG TV - Picture Quality and Optimization",
          link: "https://www.lg.com/us/support/help-library/lg-tv-picture-quality-and-optimization--20152175493545",
        },
      ],
      title: "Use Picture modes",
      topic_note:
        "Different picture modes are available on your TV. You can select the mode that is best suited to your preferences or viewing environment.\r\n",
    },
    "use-sound-modes": {
      category: "Customizing the settings",
      category_slug: "customizing-the-settings",
      steps: [
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 878,
                top: 332,
                type: "round",
                width: 47,
              },
              {
                height: 47,
                left: 63,
                top: 85,
                type: "rectangle",
                width: 47,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-01",
          text: "<p>Navigate to and open <strong>Settings</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 50,
                left: 14,
                top: 136,
                type: "rectangle",
                width: 138,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-02",
          text: "<p>Navigate to <strong>Sound</strong>.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: 67,
                left: 164,
                top: 157,
                type: "rectangle",
                width: 262,
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-03",
          text: "<p>Select <strong>Select Mode</strong>. </p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-04",
          text: "<p>You can choose from the following modes:</p><p><strong>AI Sound/AI Sound Pro: </strong>Uses optimized sound and virtual surround sound.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-05",
          text: "<p><strong>Standard:</strong> Uses optimized sound for all content types.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-06",
          text: "<p><strong>Cinema:</strong> Optimizes the sound while watching movies.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-07",
          text: "<p><strong>Clear Voice Pro:</strong> Boosts voice clarity so dialogue is easier to hear.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "<p>The name of the sport may differ depending on the region.</p>",
          preset: 0,
          src: "use-sound-modes-08",
          text: "<p><strong>Sports:</strong> Optimizes the sound while watching sports.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-09",
          text: "<p><strong>Music:</strong> Optimizes the sound while listening to music.</p>",
        },
        {
          gesture: {
            gesture_type: "next",
            height: 36,
            left: 717,
            top: 542,
            width: 74,
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-10",
          text: "<p><strong>Game Optimizer:</strong> Optimizes the sound while playing games.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-05",
          text: "<p>Done.</p>",
        },
        {
          gesture: {
            buttons: [
              {
                height: 47,
                left: 851,
                top: 290,
                type: "round",
                width: 47,
              },
              {
                height: "54px",
                left: 128,
                top: 93,
                type: "rectangle",
                width: "172px",
              },
            ],
            gesture_type: "double",
          },
          note: "",
          preset: 0,
          src: "use-sound-modes-10",
          text: "<p>Congrats!\r\nYou are now able to use sound modes.</p>",
          additional_help:
            "To configure the different Sound modes on your LG TV, please check out:",
          link_title: "Troubleshooting Sound Out Settings On My LG TV",
          link: "https://www.lg.com/us/support/help-library/lg-tv-troubleshooting-sound-out-settings-on-my-lg-tv-CT10000018-20153095965157",
        },
      ],
      title: "Use Sound modes",
      topic_note:
        "Different sound modes are available on your TV. You can select the sound mode that is best suited to the type of content you are watching.\r\n",
    },
  },
  map: {
    Unboxing: [
      {
        title: "Unbox your LG TV",
        url: "unbox-your-lg-tv",
      },
    ],
    "Getting started": [
      {
        title: "Register your LG TV",
        url: "register-your-lg-tv",
      },
      {
        title: "Initial setup for your LG TV",
        url: "initial-setup-for-your-lg-tv",
      },
      {
        title: "Connect to a wireless network",
        url: "connect-to-a-wireless-network",
      },
      {
        title: "Connect to a wired network",
        url: "connect-to-a-wired-network",
      },
    ],
    "Customizing the settings": [
      {
        title: "Set up personal profiles",
        url: "set-up-personal-profiles",
      },
      {
        title: "Use Picture modes",
        url: "use-picture-modes",
      },
      {
        title: "Use Sound modes",
        url: "use-sound-modes",
      },
    ],
    "Using the Magic Remote": [
      {
        title: "Get to know the Magic Remote",
        url: "get-to-know-the-magic-remote",
      },
      {
        title: "Pair or unpair the Magic Remote",
        url: "pair-or-unpair-the-magic-remote",
      },
      {
        title: "Set up Quick Access shortcuts",
        url: "set-up-quick-access-shortcuts",
      },
      {
        title: "Set up Voice command",
        url: "set-up-voice-command",
      },
    ],
    "Connecting external devices": [
      {
        title: "Screen mirror with Apple AirPlay2",
        url: "screen-mirror-with-apple-airplay-2",
      },
      {
        title: "Screen mirror with Magic Tap",
        url: "screen-mirror-with-magic-tap",
      },
      {
        title: "Screen mirror from iOS devices",
        url: "screen-mirror-from-ios-devices",
      },
      {
        title: "Screen mirror from a PC",
        url: "screen-mirror-from-a-pc",
      },
      {
        title: "Screen mirror from Android devices",
        url: "screen-mirror-from-android-devices",
      },
      {
        title: "Connect a Bluetooth device",
        url: "connect-a-bluetooth-device",
      },
      {
        title: "Remove a Bluetooth device",
        url: "remove-a-bluetooth-device",
      },
      {
        title: "Connect a sound bar",
        url: "connect-a-sound-bar",
      },
    ],
    "Customizing apps & contents": [
      {
        title: "Add apps",
        url: "add-apps",
      },
      {
        title: "Remove apps",
        url: "remove-apps",
      },
      {
        title: "Use Intelligent edit ",
        url: "use-intelligent-edit",
      },
      {
        title: "Customize the Home screen",
        url: "customize-the-home-screen",
      },
      {
        title: "Use LG Channels",
        url: "use-lg-channels",
      },
      {
        title: "Use LG Fitness",
        url: "use-lg-fitness",
      },
      {
        title: "Set up LG ThinQ with an iOS device",
        url: "set-up-lg-thinq-with-an-ios-device",
      },
      {
        title: "Set up LG ThinQ with an Android device",
        url: "set-up-lg-thinq-with-an-android-device",
      },
    ],
    "Use LG TV features": [
      {
        title: "Home Hub",
        url: "home-hub",
      },
      {
        title: "Always Ready mode",
        url: "always-ready-mode",
      },
      {
        title: "Room to Room Share",
        url: "room-to-room-share",
      },
      {
        title: "Sports Alerts",
        url: "sports-alerts",
      },
      {
        title: "Game Optimizer",
        url: "game-optimizer",
      },
      {
        title: "Family Care",
        url: "family-care",
      },
      {
        title: "AI Picture Pro",
        url: "ai-picture-pro",
      },
    ],
  },
};

export const userGuideSlice = createSlice({
  name: "userGuide",
  initialState,
  reducers: {
    setTopicKey: (state, action) => {
      state.step = 0;
      state.topic_key = action.payload;
    },
    nextStep: (state) => {
      if (
        state.data?.[state.topic_key]?.steps &&
        state.step < state.data[state.topic_key].steps.length - 1
      ) {
        state.step += 1;
      }
    },
    previousStep: (state) => {
      if (state.step > 0) {
        state.step -= 1;
      }
    },
    resetStep: (state) => {
      state.step = 0;
    },
  },
});

export const { nextStep, previousStep, resetStep, setTopicKey } = userGuideSlice.actions;

export default userGuideSlice.reducer;
