from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify 404 page
        print("Verifying 404 page...")
        page.goto("http://localhost:3000/random-page-for-404")

        # Check if the home button is visible
        home_button = page.locator("a.home-button")
        if home_button.is_visible():
            print("SUCCESS: Home button is visible on 404 page.")
        else:
            print("FAILURE: Home button is NOT visible on 404 page.")

        # Screenshot 404 page
        page.screenshot(path="verification/404_page.png")
        print("Screenshot of 404 page saved to verification/404_page.png")

        # 2. Verify Index page
        print("Verifying Index page...")
        page.goto("http://localhost:3000/")

        # Check aria-hidden on github icon
        github_icon = page.locator("svg.github-icon")
        aria_hidden = github_icon.get_attribute("aria-hidden")
        if aria_hidden == "true":
             print("SUCCESS: Github icon has aria-hidden='true'.")
        else:
             print(f"FAILURE: Github icon aria-hidden attribute is '{aria_hidden}'.")

        # Screenshot Index page
        page.screenshot(path="verification/index_page.png")
        print("Screenshot of Index page saved to verification/index_page.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
