import React, { Component } from 'react';

import { connect } from 'react-redux';


import { get_photos } from '../store/actions';

class photos extends Component {



    componentWillMount() {
        this.props.dispatch(get_photos());
    }

    photoList = (photo, index) => {
        return (
                <div key={index}>
                    <b>{photo.title}</b>
                    <br/>
                    <img src={photo.url} width="100" height="100"/>
                </div>
                )
    }

    render() {
        const { photoList, isloading } = this.props;

        return (
            <div>
                <h1>Photo List</h1>
                    {
                        (isloading ? <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i> :
                            (photoList && photoList.length > 0 ?
                                photoList.map((photo, index) => {
                                    return this.photoList(photo, index)
                                }) : 'No Data'
                            )
                        )
                    }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const { photo } = state;
    return {
        isloading: photo.loading,
        photoList: photo.photos
    }
}

export default connect(mapStateToProps)(photos);