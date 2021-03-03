# 🧨 10up Performance Demo: Code Splitting
how to improve **FID**, **TTFB** and **TTI** using Webpack Code Splitting in WordPress.

### 📦 Local setup
A single-site WordPress installation is required to run the demo locally. This demo was created and worked on through WP Local Docker. That being said, you can also use VVV & Vagrant or Local by Flywheel if you are more comfortable with those services.
### 💎 Clone the repo
This repo is intended to replace the `wp-content` folder.
1. `rm -rf wp-content` to remove the default wp-content folder
2. `git clone https://github.com/dainemawer/10up-performance-demo wp-content` to clone all new files into a new `wp-content` folder.
3. Run `composer install && npm install` in the `wp-content` root.
4. Run `composer install && npm install` in the `themes/performance` root.
5. Activate the theme in Dashboard -> Appearance -> Themes
### 🏷 Branches
- `trunk` contains all the stable code for the repo, ideally try not to merge anything in there.
- `feature-no-code-splitting` contains statically imported JS that has bloated the bundle size.
- `feature-code-splitting` contains the amended configuration for code splitting in the theme.
- Each branch includes WebPackBundle Analyzer as well as the Web Vitals JS package.
- Make sure you run `npm run build` or `npm run watch` to see the changes on each branch when you switch between branches.

### 🧰 What to look out for
Ideally, we want to see a dramatic difference in bundle size and a number of cache-able chunks which could be prefetched or preloaded
based on the projects needs. This bundle size and chunk size can measured in the terminal output of `npm run build`
### 📇 Authors
written and demonstrated by [Chelsea Skovgaard](https://github.com/chelseaskovgaard) and [Daine Mawer](https://github.com/dainemawer)

### 💡 Questions
Feel free to email [Chelsea](mailto:chelsea.skovgaard@10up.com) or [Daine](mailto:daine.mawer@10up.com)

