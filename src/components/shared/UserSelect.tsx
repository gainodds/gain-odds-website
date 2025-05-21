import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  label?: string;
  onSelect: (user: User) => void;
}

export default function UserSelect({ onSelect, label }: Props) {
  const [users, setUsers] = useState<User[]>([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  }, [query, users]);

  const handleSelect = (user: User) => {
    setQuery(user.name);
    setIsOpen(false);
    onSelect(user);
  };

  return (
    <div className="relative w-full max-w-md basis-2/3">
      <label htmlFor="">
        {label}
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onBlur={() => {
            // Delay closing dropdown to allow item click to register
            setTimeout(() => setIsOpen(false), 150);
          }}
          placeholder="Search user..."
          className="input"
        />
      </label>

      {isOpen && (
        <div className="absolute z-10 w-full bg-white dark:bg-gray-800 border rounded-lg shadow-md mt-1 max-h-60 overflow-auto">
          {loading ? (
            <p className="p-2 text-gray-500">Loading...</p>
          ) : error ? (
            <p className="p-2 text-red-500">{error}</p>
          ) : filtered.length === 0 ? (
            <p className="p-2 text-gray-500">No users found</p>
          ) : (
            filtered.map((user) => (
              <div
                key={user.id}
                onClick={() => handleSelect(user)}
                className="px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 cursor-pointer"
              >
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
