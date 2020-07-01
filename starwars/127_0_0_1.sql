-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2020. Júl 01. 14:32
-- Kiszolgáló verziója: 10.4.11-MariaDB
-- PHP verzió: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `swadatbazis`
--
CREATE DATABASE IF NOT EXISTS `swadatbazis` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `swadatbazis`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `bolygo`
--

CREATE TABLE `bolygo` (
  `bolygo_id` int(11) NOT NULL,
  `bolygo_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `bolygo_index` text COLLATE utf8_hungarian_ci NOT NULL,
  `bolygo_kep` text COLLATE utf8_hungarian_ci NOT NULL,
  `bolygo_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `jarmu`
--

CREATE TABLE `jarmu` (
  `jarmu_id` int(11) NOT NULL,
  `jarmu_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `jarmu_index` text COLLATE utf8_hungarian_ci NOT NULL,
  `jarmu_kep` text COLLATE utf8_hungarian_ci NOT NULL,
  `jarmu_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `leny`
--

CREATE TABLE `leny` (
  `leny_id` int(11) NOT NULL,
  `leny_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `leny_index` text COLLATE utf8_hungarian_ci NOT NULL,
  `leny_kep` text COLLATE utf8_hungarian_ci NOT NULL,
  `leny_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `noveny`
--

CREATE TABLE `noveny` (
  `noveny_id` int(11) NOT NULL,
  `noveny_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `noveny_index` text COLLATE utf8_hungarian_ci NOT NULL,
  `noveny_kep` text COLLATE utf8_hungarian_ci NOT NULL,
  `noveny_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szemely`
--

CREATE TABLE `szemely` (
  `szemely_id` int(11) NOT NULL,
  `szemely_felh` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szemely_jelszo` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szemely_rang` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `szereplo`
--

CREATE TABLE `szereplo` (
  `szereplo_id` int(11) NOT NULL,
  `szereplo_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `szereplo_index` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `szereplo_kep` varchar(100) COLLATE utf8_hungarian_ci NOT NULL,
  `szereplo_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `szereplo`
--

INSERT INTO `szereplo` (`szereplo_id`, `szereplo_nev`, `szereplo_index`, `szereplo_kep`, `szereplo_leiras`) VALUES
(1, 'Luke Skywalker', 'lukeindex.jpg', 'lukekep1.jpg', 'Luke Skywalker egy emberi fajba tartozó, Erő-érzékeny férfi volt, aki korának legnagyobb Jedi lovagjaként harcolt a Galaktikus Birodalom és a Sith Rend ellen ikernővére, Leia Organa hercegnő oldalán a Lázadók Szövetségének tagjaként. Apja Anakin Skywalker Jedi lovag, anyja Padmé Amidala, a Naboo bolygó királynője és szenátor volt.');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `targy`
--

CREATE TABLE `targy` (
  `targy_id` int(11) NOT NULL,
  `targy_nev` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `targy_index` text COLLATE utf8_hungarian_ci NOT NULL,
  `targy_kep` text COLLATE utf8_hungarian_ci NOT NULL,
  `targy_leiras` text COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `bolygo`
--
ALTER TABLE `bolygo`
  ADD PRIMARY KEY (`bolygo_id`);

--
-- A tábla indexei `jarmu`
--
ALTER TABLE `jarmu`
  ADD PRIMARY KEY (`jarmu_id`);

--
-- A tábla indexei `leny`
--
ALTER TABLE `leny`
  ADD PRIMARY KEY (`leny_id`);

--
-- A tábla indexei `noveny`
--
ALTER TABLE `noveny`
  ADD PRIMARY KEY (`noveny_id`);

--
-- A tábla indexei `szemely`
--
ALTER TABLE `szemely`
  ADD PRIMARY KEY (`szemely_id`);

--
-- A tábla indexei `szereplo`
--
ALTER TABLE `szereplo`
  ADD PRIMARY KEY (`szereplo_id`);

--
-- A tábla indexei `targy`
--
ALTER TABLE `targy`
  ADD PRIMARY KEY (`targy_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `bolygo`
--
ALTER TABLE `bolygo`
  MODIFY `bolygo_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `jarmu`
--
ALTER TABLE `jarmu`
  MODIFY `jarmu_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `leny`
--
ALTER TABLE `leny`
  MODIFY `leny_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `noveny`
--
ALTER TABLE `noveny`
  MODIFY `noveny_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `szemely`
--
ALTER TABLE `szemely`
  MODIFY `szemely_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `szereplo`
--
ALTER TABLE `szereplo`
  MODIFY `szereplo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `targy`
--
ALTER TABLE `targy`
  MODIFY `targy_id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
