import React, { FC, useState, useEffect } from "react";
import { action } from "store";
import Loader from "components/Loader";
import styles from "./Playlist.module.scss";
import classNames from "classnames";
import EyeIcon from "components/Icons/Eye";

import { ISong, PlaylistType } from 'ts-types/user';
import { useTypedSelector } from "hooks/useTypedSelector";

const Playlist: FC = () => {
    const { user } = useTypedSelector(state => state);
    const [songs, setSongs] = useState<PlaylistType>(null);

    useEffect(() => {
        action('GET_USER_PLAYLIST', user.id);
    }, []);

    useEffect(() => {
        setSongs(user.playlist);
    }, [user.playlist]);

    return !songs ? (
        <Loader />
    ) : (
        <div className={styles.playlist}>
            <div className={styles.playlist__row}>
                <div className={styles.playlist__id}>ID</div>
                <div className={styles.playlist__name}>Песня</div>
            </div>
            {songs.map((song: ISong) => {
                const handleTrackSong = () => {
                    action('TOGGLE_TRACKING_SONG', song.id);
                };
                return (
                    <div
                        className={classNames(
                            styles.playlist__row,
                            styles.playlist__song
                        )}
                        key={`song_key-${song.id}`}
                        onClick={handleTrackSong}
                    >
                        <div className={styles.playlist__id}>{song.id}</div>
                        <div className={styles.playlist__name}>
                            {song.band && song.name && (
                                <span>{`${song.band} - ${song.name}`}</span>
                            )}
                            {song.tracked && <EyeIcon width={25} />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Playlist;
