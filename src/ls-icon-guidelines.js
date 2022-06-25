import "./base.css"
import "./android.css"
import "./ios.css"

const VALID_PLATFORMS = ["ios", "android"]
const ANDROID_TEMPLATE = `  
      <div class="wrapper">
          <div class="vertical-rectangle"></div>
          <div class="square"></div>
          <div class="horizontal-rectangle"></div>
          <div class="large-circle"></div>
          <div class="small-circle"></div>
          <div class="cross-1"></div>
          <div class="cross-2"></div>
          <div class="horizontal-line-1"></div>
          <div class="horizontal-line-2"></div>
          <div class="horizontal-line-3"></div>
          <div class="vertical-line-1"></div>
          <div class="vertical-line-2"></div>
          <div class="vertical-line-3"></div>
      </div>
`
const IOS_TEMPLATE = `
      <div class="wrapper">
          <div class="large-circle"></div>
          <div class="mid-circle"></div>
          <div class="small-circle"></div>
          <div class="cross-1"></div>
          <div class="cross-2"></div>
          <div class="vertical-line-1"></div>
          <div class="vertical-line-2"></div>
          <div class="vertical-line-3"></div>
          <div class="vertical-line-4"></div>
          <div class="vertical-line-5"></div>
          <div class="horizontal-line-1"></div>
          <div class="horizontal-line-2"></div>
          <div class="horizontal-line-3"></div>
          <div class="horizontal-line-4"></div>
          <div class="horizontal-line-5"></div>
      </div>
`

window.LsIconGuidelines = {
  init: (options) => {
    const {
      element,
      platform = "ios",
      showGuidelines = true,
      showPlatformLabel = true,
      showShadow = true,
      showSafeArea = true,
      borderColor = "#ffffff",
      backgroundColor = "#f2f2f2",
      fontColor = "#5f5f5f",
    } = options

    const isHtmlElement = element instanceof HTMLElement

    if (!isHtmlElement) throw new Error("Element must be a HTMLElement")

    if (!VALID_PLATFORMS.includes(platform.toLowerCase()))
      throw new Error("Platform must be ios or android")

    element.innerHTML =
      platform.toLowerCase() === "ios" ? IOS_TEMPLATE : ANDROID_TEMPLATE

    element.classList.add("guideline")
    element.classList.add(platform)
    element.classList.toggle("show-guidelines", showGuidelines)
    element.classList.toggle("show-safe-area", showSafeArea)
    element.classList.toggle("show-shadow", showShadow)
    element.classList.toggle("show-platform-label", showPlatformLabel)

    element.style.backgroundColor = backgroundColor

    const wrapper = element.querySelector(".wrapper")
    wrapper.style.borderColor = borderColor
    wrapper.style.color = fontColor

    return {
      toggleVisible: () => {
        element.style.display =
          element.style.display === "none" ? "flex" : "none"
      },
      toggleGuidelines: () => {
        element.classList.toggle("show-guidelines")
      },
      toggleShadow: () => {
        element.classList.toggle("show-shadow")
      },
      toggleSafeArea: () => {
        element.classList.toggle("show-safe-area")
      },
      togglePlatformLabel: () => {
        element.classList.toggle("show-platform-label")
      },
      show: () => {
        element.style.display = "flex"
      },
      hide: () => {
        element.style.display = "none"
      },
      setIconImage: (url) => {
        element.style.backgroundImage = `url(${url})`
      },
      unsetIconImage: () => {
        element.style.backgroundImage = ""
      },
      setIconURL: (url) => {
        element.style.backgroundImage = `url(${url})`
      },
      unsetIconURL: () => {
        element.style.backgroundImage = ""
      },
      setBackgroundColor: (color) => {
        element.style.backgroundColor = color
      },
      setBorderColor: (color) => {
        wrapper.style.borderColor = color
      },
      setGuidelinesColor: (color) => {
        wrapper.style.borderColor = color
      },
      setFontColor: (color) => {
        wrapper.style.color = color
      },
    }
  },
}
