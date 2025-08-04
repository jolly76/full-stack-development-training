
function Header() {
    return (
        <div>
            <nav className="flex bg-blue-300 p-5 justify-between">
                <div>
                    {/* left section */}
                    <link to="/home">
                    <button class="text-blue font-bold">Home</button>
                    </link>
                </div>
                <div className="space-x-10">
                    {/* right section */}
                    <link to="/profile">
                    <button class="text-white font-bold ">Profile</button>
                    </link>
                    <link to="/friends">
                    <button class="text-white font-bold">My Friends</button>
                    </link>
                </div>
            </nav>
        </div>
    )
}

export default Header;