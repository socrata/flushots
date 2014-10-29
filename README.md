We were so impressed by the work that [@tkompare](https://github.com/tkompare) did on his [Chicago Flu Shots](https://github.com/tkompare/flushots2013) web application for the 2013 flu season, that we decided to fork and improve upon it for the 2014 season. Our version has two big changes:

- Instead of being based on [Google Fusion Tables](https://support.google.com/fusiontables/answer/2571232), it's instead powered by a [Socrata Open Data API](http://dev.socrata.com).
- It's been simplified and improved for easy deployment on [Github Pages](http://pages.github.com)

## About the Flu Shot Finder

![Flu Shot Finder](screenshot.png)

Given data about the location and hours of flu shot providers in your area, this application will help you locate the nearest place you can get the flu vaccine. It will even use geolocation in your browser to help find the nearest provider to your current location.

## Modifying 

The app is built on [Github Pages](http://pages.github.com) and makes use of [Jekyll](http://jekyllrb.com) to plumb configuration variables into various places on the app, so its easy to redeploy a customized version of the Flu Shot Finder without writing any new code.

1. [Fork the repo on Github](https://github.com/socrata/flushots/fork) so that you have your own copy to work with.
2. Locate data about the location of flu shot providers in your area. Hopefully, your local or state government has already provided this data, but if not, you can learn more about data hosting below.
    - If your data is already compliant with the schema below, you'll be able to use the app mostly without modifications. However, you'll still need to update the config in `_config.yml`. For details on how to configure the app, see "Configuration Options" below.
    - If your data isn't compliant with the schema below, or if you need to data cleanup on the fly, you can remap your data schema in [`js/main.js:93`](https://github.com/socrata/flushots/blob/gh-pages/js/main.js#L93). In our example, we've done some cleanup of our own, setting default start and end dates and times for locations that haven't provided their own. You can tweak that code to address any issues you've got with your data schema and contents.
3. Commit and push your updated code to your fork. 

Within a few minutes, your app will be available at <http://yourusername.github.io/flushots>! Using Github Pages' [custom domain name](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/) functionality, you can also put it at a domain of your choosing.

## Configuration Options

In [`_config.yml`](https://github.com/socrata/flushots/blob/gh-pages/_config.yml), you'll find a number of configuration options you'll need to update for your deployment:

- `gmaps_api_key` - Replace the [Google Maps API](https://developers.google.com/maps/) key with your own key
- `title` - The name of your instance of the application
- `logo` - The path to your logo image within the repository, or a full URL if hosted elsewhere
- `locality` - The city, county, or state name for your app
- `flu_info_link` - Where visitors can find additional information about the incidence of flu in your area
- `start_latitude` - The latitude of the start point that the app should center on when first loading
- `start_longitude` - The longitude of the start point that the app should center on when first loading
- `state` - The state name for your deployment, used for geocoding where a state wasn't provided by the user
- `api_endpoint` - The [API Endpoint](http://dev.socrata.com/docs/endpoints.html) for the dataset API providing your data
- `socrata_app_token` - The [Socrata App Token](http://dev.socrata.com/docs/app-tokens.html) that you've registered for your application
- `about` - The [Markdown](http://daringfireball.net/projects/markdown/syntax)-formatted about text to be displayed when clicking on the site logo

## Data Schema

- `facility_name` - The name of the facility providing the vaccinations
- `begin_date` - The begin date (example: 10/17/2014) for a timeframe for when the facility will be open for vaccinations
- `begin_time` - The start time (example: 9:00:00) for when the facility will be open for vaccinations
- `contact` - A contact name listed for the facility
- `cost` - Vaccination costs. For example, "No cost to individual. If insured, insurance will be billed."
- `end_date` - The end date for a timeframe for when the facility will be open for vaccinations
- `end_time` - The end time for when the facility will be open for vaccinations
- `hours` - List the hours for when the facility will be open. For example, Mon-Fri: 9:00 AM-9:00 PM, Sat: 9:00 AM-5:00 PM"
- `id` - Assign an unique numeric value for each row
- `latitude` - The latitude value for the location of the facility
- `longitude` - The longitude value for the location of the facility
- `notes` - Additional notes. For example, "Free to individual. Insurance will be billed. Closed 2nd Wed every month 12 to 4 PM"
- `phone` - The phone number for the facility providing the vaccinations
- `recurrence_days` - The days of the week the facility is open between the begin_date and end_date. For example, "Sunday, Monday, Tuesday, Wednesday, Thursday"
- `url` - An unique url assocated with the vaccinations for a specific location
- `street1` - Primary street address of the facility. For example, "7811 S Rachine Ave"
- `street2` - Secondary street address of the facility. For example, "2nd Floor"
- `city` - The city where the facility is located
- `state` - The state where the facility is located
- `postal_code` - The zip code where the facility is located

## Data Hosting

If vaccine provider data is not provided by your local government on Socrata, do not despair! There are other options available as well.

- If you're a local community group, free hosting is available via the [Socrata Community Data Platform](https://communities.socrata.com/). Your organization can [sign up](http://hackathon-in-a-box.org/open-data-apis/community-groups.html) and be granted an account that'll allow you to upload your data to Socrata and self-host your own API.
- If you're a [Code for America Brigade](http://www.codeforamerica.org/brigade/), you can also [sign up for free hosting](https://brigades.opendatanetwork.com/learn-more) on the [Brigade Open Data Sharing Platform](https://brigades.opendatanetwork.com/).

## Contributing

We warmly welcome [pull requests](https://help.github.com/articles/using-pull-requests/), so if there are modifications or improvements you'd like to make, feel free to fork this repo and send them our way! Please note that we may modify your pull requests to make sure they work properly with the main fork of the app.

## Warranty

This is sample code provided by [Socrata](http://www.socrata.com). No warranties or guaranties of any kind are granted. The code is licensed under the [MIT License](LICENSE.TXT), so have at it!
