document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') {
        const ALLOWED_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg']
        const androidGuidelinesElement = document.querySelector('#android-guidelines')
        const iosGuidelinesElement = document.querySelector('#ios-guidelines')

        const android = LsIconGuidelines.init({ element: androidGuidelinesElement, platform: 'android' })
        const ios = LsIconGuidelines.init({ element: iosGuidelinesElement, platform: 'ios' })

        const handleActionButtonsClick = (evt) => {
            const { id } = evt.target

            if (id === 'toggle-visible') {
                android.toggleVisible()
                ios.toggleVisible()
            }

            if (id === 'toggle-guidelines') {
                android.toggleGuidelines()
                ios.toggleGuidelines()
            }

            if (id === 'toggle-shadow') {
                android.toggleShadow()
                ios.toggleShadow()
            }

            if (id === 'toggle-safe-area') {
                android.toggleSafeArea()
                ios.toggleSafeArea()
            }

            if (id === 'toggle-platform-label') {
                android.togglePlatformLabel()
                ios.togglePlatformLabel()
            }
        }

        const buttons = document.querySelectorAll('header button')
        buttons.forEach(button => button.addEventListener('click', handleActionButtonsClick))

        const fileInput = document.querySelector('#icon-image')
        fileInput.onchange = (evt) => {
            const [file] = evt.target.files

            if (!file) return

            if (!ALLOWED_FILE_TYPES.includes(file.type)) {
                alert('File must be JPG or PNG')
                return
            }

            const url = URL.createObjectURL(file)
            android.setIconImage(url)
            ios.setIconImage(url)
        }

        const backgroundColorInput = document.querySelector('#background-color')
        backgroundColorInput.value = '#f2f2f2'
        backgroundColorInput.onchange = (evt) => {
            android.setBackgroundColor(evt.target.value)
            ios.setBackgroundColor(evt.target.value)
        }

        const borderColorInput = document.querySelector('#border-color')
        borderColorInput.value = '#ffffff'
        borderColorInput.onchange = (evt) => {
            android.setBorderColor(evt.target.value)
            ios.setBorderColor(evt.target.value)
        }

        const fontColorInput = document.querySelector('#font-color')
        fontColorInput.value = '#5f5f5f'
        fontColorInput.onchange = (evt) => {
            android.setFontColor(evt.target.value)
            ios.setFontColor(evt.target.value)
        }
    }
})