import React from 'react';
import { Grid, List, Container, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className="black-background colorblocktop">
          <Container>
            <Grid columns={3} divided>
              <Grid.Column>
                <h2>Navigation</h2>
                <hr></hr>
                <List>
                  <List.Item>About Us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h2>Main Menu</h2>
                <hr></hr>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>

              <Grid.Column>
                <h2>Connect</h2>
                <hr></hr>
                <p>Sign Up for the Latest Updates</p>
                <Input
                    action={{ color: 'black', content: 'Join'}}
                    actionPosition='right'
                    placeholder='Enter Email Address'
                />
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    );
  }
}
