# ls-icon-guidelines

Android and iOS icon guidelines system to preview your icon designs

## Install

```html
<!-- Add this in your page -->
<script src="ls-icon-guidelines.min.js"></script>
```

## Usage

[Live Preview](https://lesimoesd.dev/ls-icon-guidelines)

```javascript
    // Get the element where the previews should be render
    const androidGuidelinesElement = document.querySelector('#my-android-wrapper')
    const iosGuidelinesElement = document.querySelector('#my-ios-wrapper')

    // Render the previews
    const android = LsIconGuidelines.init({ element: androidGuidelinesElement, platform: 'android' })
    const ios = LsIconGuidelines.init({ element: iosGuidelinesElement, platform: 'ios' })

    // Set preview as visible
    android.show()
    ios.show()

    // Set preview as hidden
    android.hide()
    ios.hide()

    // Toggle preview visibility
    android.toggleVisible()
    ios.toggleVisible()

    // Toggle preview guidelines visibility
    android.toggleGuidelines()
    ios.toggleGuidelines()

    // Toggle preview shadow visibility
    android.toggleShadow()
    ios.toggleShadow()

    // Toggle preview safe area visibility
    android.toggleSafeArea()
    ios.toggleSafeArea()

    // Toggle preview label visibility
    android.togglePlatformLabel()
    ios.togglePlatformLabel()

    // Set guidelines color
    android.setGuidelinesColor('#ffffff')
    ios.setGuidelinesColor('#ffffff')

    // Set background color
    android.setBackgroundColor('#ffffff')
    ios.setBackgroundColor('#ffffff')

    // Set font color
    android.setFontColor('#ffffff')
    ios.setFontColor('#ffffff')

    // Set icon URL
    android.setIconURL('your-icon-url')
    ios.setIconURL('your-icon-url')

    // Remove icon URL
    android.unsetIconURL()
    ios.unsetIconURL()
```

## Contribute

1) Clone the project
2) Open a new branch
3) Execute `yarn install`
4) Make your changes
5) Execute `yarn build`
6) Test your changes
7) Submit a PR