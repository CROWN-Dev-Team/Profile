import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon, Button, Jumbotron, ButtonToolbar } from 'react-bootstrap';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }
  render() {
    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
<Jumbotron id="tron">

  <h1 id="greeting">Welcome!</h1>
    <p>
     Please select the link to your preferred site
    </p>

    <ButtonToolbar>

      <Button bsStyle="success"><a href="https://warm-fjord-67309.herokuapp.com/" target="_blank">Budget Boss</a></Button>

      <Button bsStyle="info"><a href="https://ncsecu.org/" target="_blank">NCSECU</a></Button>

      <Button bsStyle="warning"><a href="https://www.wellsfargo.com/" target="_blank">Wells Fargo</a></Button>

      <Button bsStyle="danger"><a href="https://www.discover.com/" target="_blank">Discover</a></Button>

  </ButtonToolbar>

</Jumbotron>

          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
