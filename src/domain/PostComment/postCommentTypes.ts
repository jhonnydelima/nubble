export interface PostComment {
  id: number;
  message: string;
  created_at: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 105,
  message: string; // Virtus calamitas valetudo currus.,
  user_id: number; // 7,
  post_id: number; // 1,
  created_at: string; // 2025-05-21T20:40:58.000-03:00,
  updated_at: string; // 2025-05-22T21:04:47.646-03:00,
  user: {
    id: number; //7,
    first_name: string; // Mateus,
    last_name: string; // de Souza,
    username: string; // mateussouza,
    email: string; // msouza@coffstack.com,
    profile_url: string; // https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png,
    is_online: boolean; // false,
    full_name: string; // Mateus de Souza
  };
  post: {
    id: number; // 1,
    text: string; // Bom dia!,
    user_id: number; // 1,
    image_url: string; // https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg,
    is_fixed: boolean; // false,
    is_activated: boolean; // true,
    created_at: string; // 2025-05-22T21:04:44.780-03:00,
    updated_at: string; // 2025-05-22T21:04:44.788-03:00,
    status: string; // published,
    meta: any; // {}
  };
  meta: any; // {}
}
