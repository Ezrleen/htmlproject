export function generatesingup(){
    const signupcontent=`
    <div class="signupcontainer">
        <div class="signup-container">
            <h2>Create Your League Account</h2>
            <form id="signupForm">
                <div class="form-group">
                    <label for="usernamesignup">Username</label>
                    <input class="forminput" type="text" id="usernamesignup" name="username" placeholder="Choose your summoner name" required minlength="3">
                    <div class="error" style="margin-top: 4px;"></div>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required>
                    <div class="error" style="margin-top: 4px;"></div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Create a strong password" required minlength="8">
                    <div class="error" style="margin-top: 4px;"></div>
                </div>

                <div class="form-group">
                    <label for="confirmPassword">Confirm Password</label>
                    <input 
                        type="password" id="confirmPassword" name="confirmPassword" placeholder="Repeat your password" required>
                        <div class="error" style="margin-top: 4px;"></div>
                </div>

                <div class="form-group">
                    <label for="region">Select Region</label>
                    <select id="region" name="region" required>
                        <option value="">Choose your region</option>
                        <option value="na">North America (NA)</option>
                        <option value="euw">Europe West (EUW)</option>
                        <option value="eune">Europe Nordic & East (EUNE)</option>
                        <option value="kr">Korea (KR)</option>
                        <option value="jp">Japan (JP)</option>
                        <option value="lan">Latin America North (LAN)</option>
                        <option value="las">Latin America South (LAS)</option>
                        <option value="br">Brazil (BR)</option>
                        <option value="ru">Russia (RU)</option>
                        <option value="tr">Turkey (TR)</option>
                        <option value="oce">Oceania (OCE)</option>
                    </select>
                    <div class="error" style="margin-top: 4px;"></div>
                </div>

                <div class="terms-group">
                    <input type="checkbox" id="acceptTerms" name="acceptTerms" required>
                    <label for="acceptTerms">I accept the Terms of Service and Privacy Policy</label>
                </div>

                <button disabled id="submit-btn" class="submit-btn">Create Account</button>
            </form>
        </div>
    </div>
    `;
    return signupcontent;
}