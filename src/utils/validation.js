export const emailValidator = email => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return { message: 'Please provide an email', class: 'input-error' };
    if (!re.test(email)) return { message: 'Invalid email', class: 'input-error' };

    return '';
};

export const passwordValidator = password => {
    if (!password || password.length <= 0) return { message: 'Please provide email', class: 'input-error' };

    return '';
};

