# The Wild Oasis

A web application for a small boutique hotel with beautiful wooden cabins. The application allows a signed-in 

user to create and edit a cabin,confirm and delete a booking and change the hotel settings. 
It has a descriptive dashboard that represents the sales,bookings, 

check-ins and the occupancy rate and also displays beautiful charts denoting the sales and the stay duration summary


## Tech Stack used

*)HTML

*)CSS

*)JS

*)React

*)React-Router

*)React-Query - for managing remote state

*)Styled components - a library that allows us to write CSS in JS while building custom components in React.

*)Supabse - Backend-as-a-Service (BaaS) app development platform which provides a full Postgres database for every project with realtime functionality, database backups, extensions, and more.

*)Recharts - a composable charting library built on React components.

*)React-Hook-Form - a performant,flexible and extensible forms library for react hooks making working with forms much more simpler.

*)React-Hot-Toast - a lightweight and customizable react notification library.

*)React-Error-Boundary - a library that ships with a simple Error boundary component.

*)React-icons - a small library that ships in with beautiful icons that you can add to your react app.

## Project Structure

*)src/context : It consists of the global dark mode state managed by the React Context API.

*)src/data : It consists of dummy data which is uploaded on the database.

*)src/features : It consists of sub folders with each concerned about an individual application feature like authentication,checking-in and out a user,editing and viewing the settings,etc.

*)src/hooks : It consists of all the custom hooks being used

*)src/pages : It consists of all the components that represent different views or pages in our application. Each component loads corresponding to a specific route defined in our application.

*)src/services : It consists of the supabase client and all the functions that interact with our supabase API's.

*)src/styles : It consists of all the global styles defined using the styled components.

*)src/ui : It consists of all the components most of which are purely presentational components while some being stateful and structural components.

*)src/utils - It consists of allm the utilities.


## Features

The features being implemented in the application are:

1)Logging-in : Only authenticated users can log-in.

2)Dashboard - a beautiful dashboard with a side bar that allows users to navigate through the application and shows all the sales,bookings data,the check-ins and the occupancy rate.
It also represents data visually in the form of beautiful charts.Also, displays bookings for the current day and allows the user to update the status of the booking.

3)Checking,editing and filtering bookings : user can view all the bookings, filter them and edit their status.

4)Checking,adding,deleting,editing and filtering cabins : user can view all the available cabins,edit them,add new cabins,filter them and can even delete them.

5)Creating a new user : Authenticated users can create new users( completely logical as you can't just have anyone managing the hotel data).

6)Updating User data : User can update the user data.

7)Viewing and editing the hotel settings : user can view the exisiting hotel settings and can edit them.

8)Dark Mode Toggle : user can toggle between dark and light mode.

9)Logging out : After the user is finished working with the application,he/she can logout.


## Project link

https://the-wild-oasis122.netlify.app/login

Note Users viewing the application won't be able to edit,delete or add any cabins,bookings or settings as i have the changed the user policies. 

So, in case an error pops up while doing all of these, there isn't anything with the application code, 
it's just that i have changed the user policies to ensure that other users can't edit or change the application data.
