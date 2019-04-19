import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('user')
@observer
class UserBase extends React.Component {
    render() {
        const { userInfo } = this.props.user;
        return (
            <div className="user-base">
                {userInfo.userName}
            </div>
        )
    }
}

export default UserBase;