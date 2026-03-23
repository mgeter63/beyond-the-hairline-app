// =============================================
// auth.js — Beyond the Hairline
// Handles Login, Signup, Logout, Reset Password
// =============================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://wyeqjkyglmfwzxdihnun.supabase.co';
const SUPABASE_KEY = 'sb_publishable_x3qw_r8giCbHEUHyzYRQRA_nnLY4WVl';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


// SIGN UP
export async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { success: false, message: error.message };
  return { success: true, message: 'Account created! Check your email to confirm.' };
}


// LOG IN
export async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { success: false, message: error.message };
  return { success: true, user: data.user };
}


// LOG OUT
export async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) return { success: false, message: error.message };
  return { success: true };
}


// FORGOT PASSWORD
export async function resetPassword(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin,
  });
  if (error) return { success: false, message: error.message };
  return { success: true, message: 'Password reset link sent! Check your email.' };
}


// GET CURRENT USER
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}


// AUTH STATE LISTENER
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN') {
    console.log('Signed in:', session.user.email);
    // window.location.href = '/index.html';
  }
  if (event === 'SIGNED_OUT') {
    console.log('Signed out');
    // window.location.href = '/login.html';
  }
});
