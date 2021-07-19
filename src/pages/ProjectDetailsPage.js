import React, { Component } from 'react';
import { Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import PageTop from '../components/PageTop/PageTop';
import ProjectDetails from '../components/ProjectDetails/ProjectDetails';
import TopNavigation from '../components/TopNavigation/TopNavigation';

class ProjectDetailsPage extends Component {

    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Projects Details"/>
                <PageTop pagetitle="Project Name"/>
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;