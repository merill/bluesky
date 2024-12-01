# Bluesky.ms

🦋 → [bluesky.ms](https://bluesky.ms) = Search for folks in the Microsoft community on Bluesky!

This repository hosts the source code for [bluesky.ms](https://bluesky.ms), a crowd sourced database of Bluesky profiles.

![image](/website/static/OpenGraphImage.png)

## Contributing

There are a few different ways to contribute to this project.

### Adding a new Bluesky profile

#### By submitting an issue (recommended)

This is the easiest way to add a profile and will result in the profile being added to the site in minutes. Use the [New Blueskey profile link](https://github.com/merill/bluesky/issues/new?assignees=&labels=&projects=&template=add-link.yaml&title=Add+Bluesky+Profile) issue template to submit a new profile.

#### By submitting a pull request (advanced)

This option is best to make updates to existing profiles, delete profiles and bulk add profiles.

Each profile is stored as a .json file at [/website/config](https://github.com/merill/bluesky/tree/main/website/config).

Some conventions to follow when creating a pull request using this method.

* The file name is name of the profile. e.g.

| Bluesky Profile | File Name |
| --- | --- |
| https://bsky.app/profile/merill.net | merill.net.json |
| https://bsky.app/profile/john.bsky.social | john.bsky.social.json |

* The file name should be lower case.
* Contents in the file should be in this format.
  * **title** - The name as shown in the Bluesky profile. e.g. Merill Fernando
  * **bluesky** - The Bluesky handle (do not include full url). e.g. **merill.net** (where the profile url is https://bsky.app/profile/**merill.net**)
  * **twitter** - Optional. Twitter handle (do not include full url) of this Bluesky user. Helps folks migrating from Twitter to Bluesky to find the folks they were following previously.
  * **category** - Optional. Choose the most appropriate topic or product the Bluesky user is known for or leave empty if a specific category is not applicable. 
    * New categories can be added (check the dropdown on the site for the list of existing categories). Avoid adding alternate names for existing categories.
    * When adding a new category, update the [Add bluesky.ms issue template](https://github.com/merill/bluesky/blob/main/.github/ISSUE_TEMPLATE/add-link.yaml) to include the new category.
* **type** - Optional. Specify if the profile belongs to a Microsoft employee or an MVP, otherwise leave blank. Supported values are: microsoft, mvp

##### Sample json

```json
{
  "title": "John Doe",
  "bluesky": "johndoe.bsky.social",
  "twitter": "johndoe",
  "category": "m365",
  "type": ""
}
```
### Reporting Issues

Open a [new bug](https://github.com/merill/bluesky/issues/new?assignees=&labels=&template=add-bug.yaml&title=%5BBug%5D) to report issues.
