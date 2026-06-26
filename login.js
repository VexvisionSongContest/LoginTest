// Paste your credentials here
const supabase = supabase.createClient('https://xjxwniomwrtcisayoeyj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqeHduaW9td3J0Y2lzYXlvZXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI0Mjc2NDMsImV4cCI6MjA5ODAwMzY0M30.6K-ViMwz2--e9TZ8QnX6xsXk8_r_4gbUtxEyxFgvIA0');

async function signUp() {
    const { error } = await supabase.auth.signUp({
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    });
    if (error) alert(error.message);
    else alert('CheckNormally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
