import React, { } from 'react'

export default function Profile() {

    return (
      <div class="login-form">
      <h2>Вход</h2>
      <form>
        <div class="form-field">
          <label for="username">Логин:</label>
          <input type="text" id="username" name="username" required></input>
        </div>
        <div class="form-field">
          <label for="password">Пароль:</label>
          <input type="password" id="password" name="password" required></input>
        </div>
        <div class="form-field">
          <button type="submit">Вход</button>
        </div>
      </form>
    </div>
    )

}