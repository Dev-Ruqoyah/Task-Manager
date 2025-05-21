const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center text-gray-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mb-4 text-purple-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6a2 2 0 012-2h2m4 4h-2m-4 4H7m4-4v-2m0 0h2m-2 0H9m6 4v-2a2 2 0 00-2-2h-2"
        />
      </svg>
      <h2 className="text-lg font-semibold">No tasks yet</h2>
      <p className="text-sm">Start by adding a new task to stay organized.</p>
    </div>
  );
};

export default EmptyState;
