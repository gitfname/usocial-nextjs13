
export function setTheme() {

    const rules = `
    :root {
        --color-white: hsl(252, 30%, 100%);
        --color-light: hsl(249, 23%, 94%);
        --color-lighter: hsl(252, 30%, 95%);
        --color-gray: hsl(252, 15%, 65%);
        --color-primary: hsl(252, 75%, 60%);
        --color-secondary: hsl(252, 100%, 90%);
        --color-sucsess: hsl(120, 95%, 65%);
        --color-danger: hsl(0, 95%, 65%);
        --color-semidark: hsla(254, 17%, 25%, 0.831);
        --color-dark: hsl(252, 30%, 17%);
        --color-black: hsl(252, 30%, 10%);
    
    
        /* ---- ThemeSwitcher_1 ---- */
    
        --themeSwitcher--bg: rgba(0, 0, 0, 0.05);
    
        /* ---- ThemeSwitcher_1 ---- */
    
    
    
        /* ---- Logo ---- */
    
        --logo--color: var(--color-black);
    
        /* End ---- Logo ---- End */
    
        /* NavBar text input */
        --topnavbar__text-input--bg: hsl(249, 23%, 94%);
        --topnavbar__text-input--color: hsl(252, 30%, 17%);
        --topnavbar__text-input__placeholder--text-color: hsl(252, 30%, 17%);
        --topnavbar__text-input__border-radius: 50px;
    
        /* ---- ProfileCard ---- */
    
        --profilecard--bg: var(--color-white);
        --profilecard--border-radius: 12px;
    
        --profilecard__img--width: 33px;
        --profilecard__img--height: 33px;
        --profilecard__img--border-radius: 50%;
    
        --profilecard__username--font-size: 0.9rem;
        --profilecard__username--font-weight: 500;
        --profilecard__username--color: var(--color-dark);
        --profilecard__username--text-track: 0.3px;
    
        --profilecard__email--font-size: 0.75rem;
        --profilecard__email--font-weight: 400;
        --profilecard__email--color: var(--color-gray);
        --profilecard__email--text-track: 0.3px;
    
        /* End ---- ProfileCard ---- End */
    
    
    
        /* ---- NotificationCard_1 ---- */
    
        --notificationcard1--padding: 12px;
        --notificationcard1--border-radius: 0px;
        --notificationcard1--bg: transparent;
        --notificationcard1--hover-bg: transparent;
        --notificationcard1--border-b-color: rgba(0, 0, 0, 0.06);
        --notificationcard1--padding-y: 14px;
    
        --notificationcard1_placeholder--bg: var(--color-gray);
    
        --notificationcard1__img--width: 2.4rem;
        --notificationcard1__img--height: 2.4rem;
        --notificationcard1__img--border-radius: 0.8rem;
        --notificationcard1__img--shadow-color: rgba(0, 0, 0, 0.3);
    
        --notificationcard1--font-size: 0.9rem;
        --notificationcard1--color: var(--color-semidark);
        --notificationcard1--font-weight: 500;
    
        --notificationcard1__username--font-size: 0.9rem;
        --notificationcard1__username--color: var(--color-dark);
        --notificationcard1__username--font-weight: 500;
    
        --notificationcard1__date--font-size: 0.75rem;
        --notificationcard1__date--color: rgba(0, 0, 0, 0.6);
        --notificationcard1__date--font-weight: 600;
    
        /* End ---- NotificationCard_1 ---- End */
    
        --border-radius: 2rem;
        --card-border-radius: 1rem;
        --btn-padding: 0.4rem 1.5rem;
        --btn-box-shadow: 1px 2px 10px -1px rgba(0, 0, 0, 0.6);
        --search-padding: 0.6rem 1rem;
        --card-padding: 1rem;
    
        --html-font-size: 14px;
    }
    `

    const style = document.createElement("style")
    style.innerHTML = rules
    document.body.append(style)
}