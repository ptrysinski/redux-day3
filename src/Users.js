import React from 'react'

import { connect } from 'react-redux'
import { fetchUsersAsyncActionCreator } from './state/users'

const Users = (props) => {
  return (
    <div>
        <button
            onClick={() => {
                props._fetchUsers()
            }}
        >
            Załaduj
        </button>
      {
        props._isError ?
        'Błąd'
        :
        props._isLoading ?
        'Ładuję'
        :
        props._users &&
        props._users.map(
          user => (
            <div
              key={user.login.uuid}
            >
              {user.name.first}
            </div>
          )
        )
      }
    </div>
  )
}

const mapStateToProps = state => ({
  _users: state.users.users,
  _isLoading: state.users.isLoading,
  _isError: state.users.isError,
})

const mapDispatchToProps = dispatch => ({
    _fetchUsers: (users) => dispatch(fetchUsersAsyncActionCreator(10))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
