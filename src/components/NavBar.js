import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" >
              Home
            </Link>
            <Link
              color="inherit"
              href="/projects"
            >
              Projects
            </Link>
          </Breadcrumbs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar