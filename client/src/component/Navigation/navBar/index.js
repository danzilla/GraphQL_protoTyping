import React, { Component } from 'react';
import { emojify } from 'react-emojione';
// Navigation
class Nav extends Component {
    // state
    constructor(props) {
        super(props);
        this.state = {
            randomCategoryEmoji: "",
        };
    }
    // comp did Mount - First
    componentDidMount() {
        var emojiList = [
            ":pancakes:",
            ":tea:",
            ":pizza:",
            ":peach:",
            ":ice_cream:",
            ":rosette:",
            ":fireworks:",
            ":gem:",
            ":cherry_blossom:",
            ":pig:",
            ":unicorn:",
            ":gorilla:",
            ":avocado:",
            ":kiwi:",
            ":strawberry:"
        ];
        this.setState({ randomCategoryEmoji: emojiList[Math.floor(Math.random() * emojiList.length)]})
    }
    // #vrrrrom
    render() {
        // emojify - Font size
        const emojifyOptions = {
            style: {
                height: 85,
            }
        };
        return (
            <div className="row w-100">
                <nav className="light-blue darken-3">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo px-2 left">{emojify(':rocket:', emojifyOptions)}</a>
                        <ul class="right">
                            <li>
                                <a className="btn waves-effect waves-light tooltipped dropdown-trigger transparent"
                                    data-position="bottom"
                                    data-tooltip="FannyPackz"
                                    data-target="DropDrip">
                                    {emojify(this.state.randomCategoryEmoji)}
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*
                    activeAccount
                    activeCategory
                    activeSearch
                    activeSettings
                    activeUsers
                */}
                <ul id="DropDrip" className="dropdown-content">
                    <li><a onClick={this.props.activeFannyPack}>Accounts</a></li>
                    <li><a onClick={this.props.activeCategory}>Labels</a></li>
                    <li className="divider"></li>
                    <li><a onClick={this.props.activeUsers}>Users</a></li>
                </ul>
            </div>
        );
    }
}

export default Nav;