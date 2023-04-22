export const getFirebaseErrorMessage = (error) => {
    let errorMessage = 'An error occurred, please try again later.'
  
    switch (error.code) {
        case 'auth/invalid-email':
            errorMessage = 'Invalid email.'
            break
        case 'auth/user-not-found':
            errorMessage = 'User not found.'
            break
        case 'auth/weak-password':
            errorMessage = 'You really want that weak of a password? (use at least 6 characters)'
            break
        case 'auth/wrong-password':
            errorMessage = 'Wrong password.'
            break
        case 'auth/email-already-in-use':
            errorMessage = 'Looks like someone else is already using that email :/'
            break
        case 'auth/missing-password':
            errorMessage = 'Might help to not leave the password field blank :P'
            break

      default:
        break
    }
  
    return errorMessage
  }
  