# Martin Saveski's Website

Personal academic website built with Jekyll and deployed on GitHub Pages.

## Local Development

To run the website locally:

```bash
# Install Jekyll (if not already installed)
gem install jekyll jekyll-feed jekyll-seo-tag

# Serve locally
jekyll serve
```

The site will be available at `http://localhost:4000/www_personal/`

## Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

## Updates Guide

To update content, modify files in the `_data/` directory:
- `main_info.yaml` - Personal information and social links
- `publications.yaml` - Publication list
- `projects.yaml` - Project information
- `experience.yaml` - Work experience

## External Libraries
- Framework: [Jekyll](http://jekyllrb.com/)
- CSS
  - [Skeleton](getskeleton.com)
  - Tabs: [Skeleton Tabs](https://github.com/nathancahill/skeleton-tabs)
  - Experience: [Timeline](https://codepen.io/NilsWe/pen/FemfK)
  - Icons: [Font Awesome](http://fontawesome.io/)
- JS
  - [Jquery (3.1.1)](https://jquery.com/)

**Stanford links**
- Use fetch!
- [Basic WWW for Individual Users](https://uit.stanford.edu/service/web/centralhosting/howto_user)
- [AFS File Transfer](https://uit.stanford.edu/service/afs/file-transfer/macintosh)
