export default function User({ user }) {
    const { username, avatarSrc } = user;
    return (
      <main>
        <Navbar username={username} avatarSrc={avatarSrc} />
      </main>
    );
  }
  function Navbar({ username, avatarSrc }) {
    return (
      <nav>
        <Avatar username={username} avatarSrc={avatarSrc} />
      </nav>
    );
  }
  function Avatar({ username, avatarSrc }) {
    return <img src={avatarSrc} alt={username} />;
  }


//   export default function App({ user }) {
//     const { username, avatarSrc } = user;
//     const avatar = <img src={avatarSrc} alt={username} />;
//     return (
//       <main>
//         <Navbar avatar={avatar} />
//       </main>
//     );
//   }
//   function Navbar({ avatar }) {
//     return <nav>{avatar}</nav>;
//   }