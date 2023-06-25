function UsersListItem({ user }) {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between item-center cursor-pointer">
        {user.name}
      </div>
    </div>
  );
}

export { UsersListItem };
