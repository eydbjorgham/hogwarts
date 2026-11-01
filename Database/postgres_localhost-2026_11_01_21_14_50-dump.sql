--
-- PostgreSQL database dump
--

\restrict PUt4ChD9y2EAcPhmghgPf1rNbcmtQ1jXaZ1tXoTCmIH8LyqGRPoeHrWDEa6AsTa

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    teacher character varying(250) NOT NULL,
    teacher_id integer NOT NULL
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: courses_students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses_students (
    id integer NOT NULL,
    course_id integer NOT NULL,
    student_id integer NOT NULL
);


ALTER TABLE public.courses_students OWNER TO postgres;

--
-- Name: courses_students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.courses_students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: houses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.houses (
    id integer CONSTRAINT house_id_not_null NOT NULL,
    name text CONSTRAINT house_name_not_null NOT NULL,
    colors text[],
    founder text
);


ALTER TABLE public.houses OWNER TO postgres;

--
-- Name: house_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.house_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.house_id_seq OWNER TO postgres;

--
-- Name: house_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.house_id_seq OWNED BY public.houses.id;


--
-- Name: students; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.students (
    id integer NOT NULL,
    name character varying(250) NOT NULL,
    house character varying(100) NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE public.students OWNER TO postgres;

--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.students ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.students_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    name character varying(250) NOT NULL,
    house character varying(100) NOT NULL,
    id integer NOT NULL,
    house_id integer NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: houses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses ALTER COLUMN id SET DEFAULT nextval('public.house_id_seq'::regclass);


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (7, 'Divination', 'Sybill Trelawny', 7);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (1, 'Transfiguration', 'Minerva McGonagall', 1);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (4, 'Defence against the dark arts', 'Remus Lupin', 4);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (2, 'Charms', 'Filius Flitwick', 2);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (6, 'Care of magical creatures', 'Rubeus Hagrid', 6);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (5, 'Herbology', 'Pomona Sprout', 5);
INSERT INTO public.courses OVERRIDING SYSTEM VALUE VALUES (3, 'Potions', 'Severus Snape', 2);


--
-- Data for Name: courses_students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.courses_students OVERRIDING SYSTEM VALUE VALUES (4, 1, 2);


--
-- Data for Name: houses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.houses VALUES (1, 'Gryffindor', '{red,yellow}', 'Godric Gryffindor');
INSERT INTO public.houses VALUES (2, 'Slytherin', '{green,silver}', 'Salazar Slytherin');
INSERT INTO public.houses VALUES (3, 'Hufflepuff', '{yellow,black}', 'Helga Hufflepuff');
INSERT INTO public.houses VALUES (4, 'Ravenclaw', '{blue,silver}', 'Rowena Ravenclaw');


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (11, 'Cho Chang', 'Ravenclaw', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (9, 'Gregory Goyle', 'Slytherin', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (4, 'Neville Longbottom', 'Gryffindor', 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (7, 'Draco Malfoy', 'Slytherin', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (16, 'Susan Bones', 'Hufflepuff', 4);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (6, 'Seamus Finnigan', 'Gryffindor', 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (2, 'Harry James Potter', 'Gryffindor', 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (13, 'Padma Patil', 'Ravenclaw', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (3, 'Hermione Granger', 'Gryffindor', 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (10, 'Theodore Nott', 'Slytherin', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (5, 'Ginny Weasly', 'Gryffindor', 1);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (12, 'Luna Lovegood', 'Ravenclaw', 3);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (8, 'Vincent Crabbe', 'Slytherin', 2);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (15, 'Hannah Abbott', 'Hufflepuff', 4);
INSERT INTO public.students OVERRIDING SYSTEM VALUE VALUES (14, 'Cedric Diggory', 'Hufflepuff', 4);


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Albus Dumbledore', 'Gryffindor', 1, 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Severus Snape', 'Slytherin', 3, 2);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Albus Dumbledore', 'Gryffindor', 4, 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Minerva McGonagall', 'Gryffindor', 2, 1);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Pomona Sprout', 'Hufflepuff', 5, 4);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Filius Flitwick', 'Ravenclaw', 6, 3);
INSERT INTO public.teachers OVERRIDING SYSTEM VALUE VALUES ('Rubeus Hagrid', 'Gryffindor', 7, 1);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 1, false);


--
-- Name: courses_students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_students_id_seq', 6, true);


--
-- Name: house_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.house_id_seq', 1, false);


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.students_id_seq', 16, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 7, true);


--
-- Name: courses courses_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pk PRIMARY KEY (id);


--
-- Name: houses houses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.houses
    ADD CONSTRAINT houses_pkey PRIMARY KEY (id);


--
-- Name: students students_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pk PRIMARY KEY (id);


--
-- Name: teachers teachers_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pk PRIMARY KEY (id);


--
-- Name: courses_students courses_students_course_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses_students
    ADD CONSTRAINT courses_students_course_id_fk FOREIGN KEY (course_id) REFERENCES public.courses(id);


--
-- Name: courses_students courses_students_student_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses_students
    ADD CONSTRAINT courses_students_student_id_fk FOREIGN KEY (student_id) REFERENCES public.students(id);


--
-- Name: courses courses_teachers_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_teachers_fk FOREIGN KEY (teacher_id) REFERENCES public.teachers(id);


--
-- Name: students students_house_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_house_fk FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- Name: teachers teachers_houses_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_houses_fk FOREIGN KEY (house_id) REFERENCES public.houses(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict PUt4ChD9y2EAcPhmghgPf1rNbcmtQ1jXaZ1tXoTCmIH8LyqGRPoeHrWDEa6AsTa

