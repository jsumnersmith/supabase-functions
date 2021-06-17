<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=supabase-functions">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Supabase with Functions in Gatsby
</h1>

## 🚀 Quick start

1.  **Fork & Install Project.**

    Fork this repo and pull it down to your development environment. Navigate into your new site’s directory and install dependencies.

    ```shell
    cd supabase-function/
    yarn
    ```


2.  **Setup Supbase Project**

    Read up on [how to create a project in Supabase](https://supabase.io/docs/guides/platform). Add a new table called `submissions` and add text columns for `name`, `email`, and `message`.

    Get you API keys and create a file called `.env.development`. Add those keys to the file using the following variables.

    ```.env
    SUPABASE_URL=https://{your_project_id}.supabase.co
    SUPABASE_ANON_KEY={your_anon_key}
    ```


3.  **Run Locally**

    Run the local development command:

     ```shell
    gatsby develop
    ```

    Visit `https://localhost:8000` to see the form in action. Pull response in a JSON api at `https://localhost:8000/api/get-responses`. Watch form submissions come in either on your api endpoint or in your supabase project.


4.  **Deploy to Gatbsy Cloud**
    
    You can deploy this repo directly to Gatsby Cloud and 
   
   [<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/jsumnersmith/supabase-functions)
