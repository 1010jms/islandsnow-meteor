import React from 'react';
import { Grid, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Grid centered>
          <Grid.Row>
            <Menu borderless className="midmenu">
              <Dropdown item text="MEN">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown item text="WOMEN">
                <Dropdown.Menu>
                  <Dropdown.Item>TANK TOPS</Dropdown.Item>
                  <Dropdown.Item>SHIRTS</Dropdown.Item>
                  <Dropdown.Item>HATS</Dropdown.Item>
                  <Dropdown.Item>ACCESSORIES</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>KIDS</Menu.Item>
              <Dropdown item text="BRANDS">
                <Dropdown.Menu>
                  <Dropdown.Item>DA MOKES</Dropdown.Item>
                  <Dropdown.Item>HILIFE</Dropdown.Item>
                  <Dropdown.Item>ISLAND SNOW HAWAII</Dropdown.Item>
                  <Dropdown.Item>VOLCOM HAWAII</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>SEARCH</Menu.Item>
            </Menu>
          </Grid.Row>
        </Grid>
    );
  }
}
