const controlForms = event => {
    if (event.target.matches('.cta__sign-up,.cta__sign-up *')) {
        console.log('Signed up');
    }
    // Log In
    if (event.target.matches('.cta__log-in,.cta__log-in *')) {
        console.log('Logged in');
        // Rendering Login form
        loginView.renderLoginForm();
    }
};
