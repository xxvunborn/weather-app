-- +goose Up
-- +goose StatementBegin
create TABLE favorite_places (
  id uuid primary key default gen_random_uuid(),
  user_id uuid,
  title text,
  latitude decimal,
  longitude decimal,

  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  deleted_at timestamptz
);

create trigger update_favorites_places_update_at
before update on favorite_places for each row execute procedure update_updated_at_column();
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE if exists favorite_places;
-- +goose StatementEnd
