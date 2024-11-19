
CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `parent_id` int(11) DEFAULT NULL,
    PRIMARY KEY (`id`)
)

INSERT INTO `users` (`id`, `name`, `parent_id`) VALUES
(1, 'Zaki', 2),
(2, 'Ilham', NULL),
(3, 'Irwam', 2),
(4, 'Arka', 3);



SELECT a.id, a.name, b.name AS parent_name
    FROM users a
    LEFT JOIN users b
    ON b.id = a.parent_id;
