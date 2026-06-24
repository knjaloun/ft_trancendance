CREATE TABLE `bookings` (
	`id` serial PRIMARY KEY,
	`client_id` int NOT NULL,
	`owner_id` int NOT NULL,
	`start_date` date NOT NULL DEFAULT (CURDATE()),
	`end_date` date NOT NULL,
	`car_id` int,
	`status` enum('pending','confirmed','canceled') NOT NULL
);
--> statement-breakpoint
CREATE TABLE `cars` (
	`id` serial PRIMARY KEY,
	`brand` enum('bmw','mclaren','mercedes','volkswagen','audi','toyota','lamborghini','ford','rangeRover') NOT NULL,
	`type` enum('sportscar','van','suv','limousine','pickup') NOT NULL,
	`model` varchar(255) NOT NULL,
	`daily_rate` real NOT NULL,
	`horse_power` int NOT NULL,
	`country` enum('france','germany','dubai','luxembourg','belgium','autria') NOT NULL,
	`usage` int NOT NULL,
	`available` boolean NOT NULL,
	`owner_id` int NOT NULL,
	`picture` varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `email_activation_code` (
	`id` serial PRIMARY KEY,
	`code` varchar(10) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`expires_at` timestamp DEFAULT (TIMESTAMPADD(MINUTES, 15, NOW()),
	`user_id` int,
	CONSTRAINT `code_unique` UNIQUE INDEX(`code`)
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`is` serial PRIMARY KEY,
	`user_id` int NOT NULL,
	`avatar` varchar(255),
	`description` text,
	`country` enum('france','germany','dubai','luxembourg','belgium','autria') NOT NULL
);
--> statement-breakpoint
CREATE TABLE `two_factors_code` (
	`id` serial PRIMARY KEY,
	`code` varchar(10) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`expires_at` timestamp DEFAULT (TIMESTAMPADD(MINUTES, 15, NOW()),
	`user_id` int,
	CONSTRAINT `code_unique` UNIQUE INDEX(`code`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial PRIMARY KEY,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255),
	`email` varchar(255) NOT NULL,
	`password` varchar(255),
	`salt` varchar(255),
	`created_at` timestamp DEFAULT (now()),
	`role` enum('user','admin') NOT NULL,
	`status` enum('blocked','banned','active') NOT NULL,
	`verified` boolean NOT NULL,
	`phone_number` varchar(30),
	CONSTRAINT `email_unique` UNIQUE INDEX(`email`)
);
--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_client_id_users_id_fkey` FOREIGN KEY (`client_id`) REFERENCES `users`(`id`);--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_owner_id_users_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`);--> statement-breakpoint
ALTER TABLE `bookings` ADD CONSTRAINT `bookings_car_id_cars_id_fkey` FOREIGN KEY (`car_id`) REFERENCES `cars`(`id`);--> statement-breakpoint
ALTER TABLE `cars` ADD CONSTRAINT `cars_owner_id_users_id_fkey` FOREIGN KEY (`owner_id`) REFERENCES `users`(`id`);--> statement-breakpoint
ALTER TABLE `email_activation_code` ADD CONSTRAINT `email_activation_code_user_id_users_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);--> statement-breakpoint
ALTER TABLE `profile` ADD CONSTRAINT `profile_user_id_users_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);--> statement-breakpoint
ALTER TABLE `two_factors_code` ADD CONSTRAINT `two_factors_code_user_id_users_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);