// Paste your credentials here
const supabase = supabase.createClient('YOUR_PROJECT_URL', 'YOUR_ANON_KEY');

async function signUp() {
    const { error } = await supabase.auth.signUp({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    });
    if (error) alert(error.message);
    else alert('CheckNormally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
